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


let menu_btn = document.querySelector(".menu_btn");
let mobile_menu = document.querySelector(".mobile_menu_nav")

menu_btn.addEventListener("click", function() {
    menu_btn.classList.toggle("open");
    if(menu_btn.classList.contains("open")) {  
        mobile_menu.classList.add("open")
    } else {
      mobile_menu.classList.remove("open")
    }
})


