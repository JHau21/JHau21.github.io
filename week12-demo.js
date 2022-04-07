const button = document.querySelector("#js-new-quote");
// or use document.getElementById("js-new-quote")
button.addEventListener("click", handleButtonClick);

// make API call for generating a random quote
async function handleButtonClick() {
	const endpoint = `http://quotes.stormconsultancy.co.uk/random.json`;

	try {
		const response = await fetch(endpoint);

		if (!response.ok) {
			console.log("fetch fucked up");

			throw Error(response.statusText);
		} else {
			const { quote } = await response.json();

			displayQuote(quote);

			console.log(json);
		}
	} catch (error) {
		console.log("Error: ", error);
	}
}

function displayQuote(quote) {
	const quoteText = document.querySelector("#js-quote-text");
	quoteText.textContent = quote;
}
