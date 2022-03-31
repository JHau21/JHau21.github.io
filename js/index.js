window.onload = windowLoaded;

function windowLoaded() {
	console.log("yo yo yo");
	document
		.getElementById("button-one")
		.addEventListener("mousedown", onClickOne);
	document
		.getElementById("button-two")
		.addEventListener("onmouse", onClickTwo);
}

function onClickOne() {
	window.open("https://www.youtube.com/watch?v=-O5kNPlUV7w", "_blank");
}

function onClickTwo() {
	window.open("img/me.jpg", "_blank");
}
