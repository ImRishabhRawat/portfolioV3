gsap.registerPlugin(ScrollTrigger);
function circleMouseFolower(x, y) {
	let width = x / 2;
	let height = y / 2;

	document.addEventListener("mousemove", function (dets) {
		let cursorx = dets.x - width + "px";
		let cursory = dets.y - height + "px";

		cursor.style.transform = `translate(${cursorx},${cursory})`;
	});
}
var cursor = document.querySelector("#cursor");
var width = cursor.offsetWidth;
var height = cursor.offsetHeight;
circleMouseFolower(width, height);

var button = document.querySelector(".button");
var burger = document.querySelector("#hemburger");
var navList = document.querySelector(".nav-list");

button.addEventListener("click", function () {
	burger.classList.toggle("burgerActive");
	burger.classList.toggle("burger");
	navList.classList.toggle("visible");
});

function head() {
	let heading = document.querySelector(".heading");

	heading.addEventListener("mousemove", () => {
		cursor.style.width = 150 + "px";
		cursor.style.height = 150 + "px";
		let x = 150;
		let y = 150;
		circleMouseFolower(x, y);
	});

	heading.addEventListener("mouseleave", () => {
		cursor.style.width = 10 + "px";
		cursor.style.height = 10 + "px";
		let x = 10;
		let y = 10;
		circleMouseFolower(x, y);
	});
}
head();

gsap.to(".logoName", {
	autoAlpha: 0,
	scrollTrigger: {
		trigger: "body",
		start: "top -200vh",
		end: "bottom 100vh",
		markers: false,
		toggleActions: "play none none reverse",
	},
});