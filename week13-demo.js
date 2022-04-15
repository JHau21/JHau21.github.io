const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = document.documentElement.clientWidth;
const HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
	return Math.floor(Math.random() * number);
}

function draw() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	for (let i = 0; i < 100; i++) {
		ctx.beginPath();
		ctx.fillStyle = "rgba(255,0,0,0.5)";
		ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
		ctx.fill();
	}
	for (let i = 0; i < 100; i++) {
		ctx.beginPath();
		ctx.fillStyle = "rgba(0,0,255,0.5)";
		ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
		ctx.fill();
	}
	for (let i = 0; i < 100; i++) {
		ctx.beginPath();
		ctx.fillStyle = "rgba(0,255,0,0.5)";
		ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
		ctx.fill();
	}
}

btn.addEventListener("click", draw);
