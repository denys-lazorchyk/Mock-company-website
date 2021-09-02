const submit = document.querySelector("#submit");
const section1 = document.querySelector(".section-1");
const bookMeet = document.querySelector(".btn");

let intervalID;
intervalID = setInterval(() => {
	let image = document.querySelector(".lorem-me").clientHeight;
	document.querySelector(".image").style.height = `${image}px`;
}, 100);

window.addEventListener("beforeunload", function (e) {
	e.preventDefault();
	e.returnValue = "";
	clearInterval(intervalID);
});

submit.addEventListener("click", (e) => {
	e.preventDefault();
});

if (window.screen.width > 1400) {
	section1.addEventListener("mousemove", (e) => {
		bookMeet.style.transition = "translate 0.05s, box-shadow 0.4s";

		let x = e.clientX / 20 - bookMeet.getBoundingClientRect().height / 2;
		let y = e.clientY / 10 - 33;

		bookMeet.style.left = `${x}px`;
		bookMeet.style.top = `${y}px`;
	});

	section1.addEventListener("mouseout", () => {
		bookMeet.style.left = `0px`;
		bookMeet.style.top = `0px`;
		bookMeet.style.transition = "all 0.4s";
	});

	bookMeet.addEventListener("mouseenter", () => {
		bookMeet.style.transition = "all 0.4s";
	});
}
