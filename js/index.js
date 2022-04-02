window.onload = windowLoaded;

function windowLoaded() {
	let buttonOne = document.getElementById("button-one");
	buttonOne.addEventListener("mousedown", onClickOne);
	buttonOne.addEventListener("mouseover", onHoverOne);
	let buttonTwo = document.getElementById("button-two");
	buttonTwo.addEventListener("mousedown", onClickTwo);
	buttonTwo.addEventListener("mouseover", onHoverTwo);
}

function onClickOne() {
	window.open("https://www.youtube.com/watch?v=-O5kNPlUV7w", "_blank");
}

function onClickTwo() {
	window.open("https://jhau21.github.io/img/me.jpg", "_blank");
}

function onHoverOne() {
	let buttonOne = document.getElementById("button-one");
	buttonOne.classList.toggle("buttonHover");
}

function onHoverTwo() {
	let buttonTwo = document.getElementById("button-two");
	buttonTwo.classList.toggle("buttonHover");
}
