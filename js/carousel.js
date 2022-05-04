let currSlide;
let numSlides;
const inSlide = "carouselTextBoxesContainer animationIn";
const outSlide = "carouselTextBoxesContainer animationOut";
const progCurr = "progressBox progressBoxActive";
const progNorm = "progressBox";
const inImage = "carouselBackgroundImage animationIn";
const outImage = "carouselBackgroundImage animationOut";

function onClickArrow(n) {
	prevSlide = currSlide;
	currSlide += n;

	if (currSlide > numSlides - 1) {
		currSlide = 0;
	} else if (currSlide < 0) {
		currSlide = numSlides - 1;
	}

	transition(prevSlide, currSlide);
}

function transition(prev, curr) {
	let slides = document.getElementsByClassName("carouselTextBoxesContainer");
	let slideBar = document.getElementsByClassName("progressBox");
	let background = document.getElementsByClassName(
		"carouselBackgroundImage"
	);

	slideBar[prev].className = progNorm;
	slideBar[curr].className = progCurr;

	let oldSlide = slides[prev];
	let newSlide = slides[curr];
	let oldImage = background[prev];
	let newImage = background[curr];

	oldSlide.className = outSlide;
	newSlide.className = inSlide;
	oldImage.className = outImage;
	newImage.className = inImage;
	newImage.style.display = "block";
	newSlide.style.display = "block";

	setTimeout(() => {
		oldSlide.style.display = "none";
		oldImage.style.display = "none";
	}, 1000);
}

// Load in the first slide
window.onload = function () {
	let slides = document.getElementsByClassName("carouselTextBoxesContainer");
	let slideBar = document.getElementsByClassName("progressBox");
	let background = document.getElementsByClassName(
		"carouselBackgroundImage"
	);

	numSlides = slides.length;

	slides[0].className = "carouselTextBoxesContainer";
	slides[0].style.display = "block";

	slideBar[0].className = "progressBox progressBoxActive";

	background[0].className = "carouselBackgroundImage";
	background[0].style.display = "block";

	currSlide = 0;
};
