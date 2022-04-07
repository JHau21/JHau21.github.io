const button = document.getElementById("generateQuoteButton");

button.addEventListener("click", onClick);

async function onClick() {
	try {
		const endpoint =
			"https://goquotes-api.herokuapp.com/api/v1/random?count=1";

		const resp = await fetch(endpoint);

		if (resp.ok) {
			const { quotes } = await resp.json();

			handleQuote(quotes[0]);

			// console.log(json);
		} else {
			console.log("Im a fucking dumbass");

			throw Error(resp.statusText);
		}
	} catch (error) {
		console.log("something fucked up with error message: ", error);
	}
}

function handleQuote(quote) {
	const quoteDisplay = document.getElementById("quoteContainerElement");
	const { text, author, tag } = quote;
	quoteDisplay.textContent = text;
}
