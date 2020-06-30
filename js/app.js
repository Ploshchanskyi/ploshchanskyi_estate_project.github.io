let header = document.getElementById("header")
let html = document.documentElement;
let body = document.body;

window.onscroll = function () {
	setHeader()
}

function setHeader () {
	if (html.scrollTop > 100 || body.scrollTop > 100) {
		header.classList.add("scrolled")
	} else {
		header.classList.remove("scrolled")
	}
}






