const bigFiveitem = document.querySelectorAll("big-five-item");
const bigFiveList = document.getElementsByClassName("big-five-list");
const bigFiveButton = document.getElementsByClassName("big-five-button");
const removeFirst = document.getElementById("remove-first-item-button");
const removeAll = document.getElementById("remove-all-button");

Array.from(bigFiveButton).forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		const li = e.target.parentElement;
		li.parentNode.removeChild(li);
		console.log(e.target.value);
	});
});

const newLi = document.createElement("li");
const spottedList = document
	.getElementById("spotted-animals-list")
	.getElementsByTagName("ul")[0];
console.log(spottedList);
spottedList.appendChildNode(bigFiveitem);
