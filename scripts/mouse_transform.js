let constrain = 100;
let mouseOverContainer = document.getElementById("card-container");
let card = document.getElementById("card");

function transforms(x, y, el) {
	let box = el.getBoundingClientRect();
	let calcX = -(y - box.y - box.height / 2) / constrain;
	let calcY = (x - box.x - box.width / 2) / constrain;

	card.style.boxShadow = "20px 20px 20px black;";

	return (
		"perspective(100px) " +
		"   rotateX(" +
		calcX +
		"deg) " +
		"   rotateY(" +
		calcY +
		"deg) "
	);
}

function transformElement(el, xyEl) {
	el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
	let xy = [e.clientX, e.clientY];
	let position = xy.concat([card]);

	window.requestAnimationFrame(function () {
		transformElement(card, position);
	});
};
