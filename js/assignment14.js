let sam = {
	firstName: "Sam",
	department: "Tech",
	designation: "Manager",
	salary: 40000,
	raise: true,
};

let mary = {
	firstName: "Mary",
	department: "Finance",
	designation: "Trainee",
	salary: 18500,
	raise: true,
};

let bill = {
	firstName: "Bill",
	department: "HR",
	designation: "Executive",
	salary: 21200,
	raise: false,
};

console.log("Problem #1: ", sam, mary, bill);

let company = {
	companyName: "Tech Stars",
	website: "www.techstars.site",
	employees: [sam, mary, bill],
};

console.log("Problem #2: ", company);

let newEmployee = {
	firstName: "Anna",
	department: "Tech",
	designation: "Executive",
	salary: 25600,
	raise: false,
};

company.employees = [...company.employees, newEmployee];

console.log("Problem #3: ", newEmployee, company);

const totalSalary = company.employees.reduce(
	(total, { salary }) => (total += salary),
	0
);

console.log("Problem #4: ", totalSalary);

company.employees = company.employees.map((employee) => {
	let { raise, salary } = employee;

	if (raise) {
		return {
			...employee,
			salary: salary + salary * 0.1,
			raise: false,
		};
	} else {
		return employee;
	}
});

console.log("Problem #5: ", company.employees);

const workingHome = ["Anna", "Sam"];

company.employees = company.employees.map((employee) => {
	const { firstName } = employee;

	if (workingHome.includes(firstName)) {
		return { ...employee, wfh: true };
	} else {
		return { ...employee, wfh: false };
	}
});

console.log("Problem #6: ", company.employees);
