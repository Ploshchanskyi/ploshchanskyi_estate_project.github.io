let header = document.getElementById("header")
let html = document.documentElement;
let body = document.body;

 

function setHeader () {
	if (window.pageYOffset > 100){
		header.classList.add("scrolled")
	} else {
		header.classList.remove("scrolled")
	}
}

window.addEventListener("scroll", setHeader)


$('.main-carousel').flickity({
  // options
  // cellAlign: 'left',
  contain: true,
  // freeScroll: true,
  wrapAround: true,
  autoPlay: true,
  

});

