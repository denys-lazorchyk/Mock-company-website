const submit = document.querySelector("#submit");

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
