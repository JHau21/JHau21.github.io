const button = document.getElementById("generateQuoteButton");

button.addEventListener("click", onClick);

async function onClick() {
	const quoteButton = document.getElementById("generateQuoteButton");
	quoteButton.textContent = "Loading...";
	// Added setTimeout to prevent spam and allow for loader
	setTimeout(async () => {
		try {
			const endpoint =
				"https://goquotes-api.herokuapp.com/api/v1/random?count=1";

			const resp = await fetch(endpoint);

			if (resp.ok) {
				quoteButton.textContent = "Generate Quote";

				const { quotes } = await resp.json();

				handleQuote(quotes[0]);
			} else {
				console.log("Response Error");

				throw Error(resp.statusText);
			}
		} catch (error) {
			console.log("Try-catch error: ", error);
		}
	}, 1000);
}

function handleQuote(quote) {
	const quoteDisplay = document.getElementById("quoteContainerElement");
	const quoteAuthor = document.getElementById("quoteAuthorContainer");
	const { text, author } = quote;
	quoteDisplay.textContent = text;
	quoteAuthor.textContent = ": " + author;
}
