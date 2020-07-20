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

////////////////TABS

let tablinks = document.querySelectorAll(".tablinks");
let tabcontent = document.querySelector(".tabcontent");

document.querySelector("#tab1").classList.add("active");

function openTab0 () {
  document.querySelector("#tab2").classList.remove("active");
  document.querySelector("#tab3").classList.remove("active");
  if (document.querySelector("#tab1").classList.contains("active") != true) {
    document.querySelector("#tab1").classList.add("active");
  }
}

function openTab1 () {
  document.querySelector("#tab1").classList.remove("active");
  document.querySelector("#tab3").classList.remove("active");
  if (document.querySelector("#tab2").classList.contains("active") != true) {
  document.querySelector("#tab2").classList.add("active");
  }
}
function openTab2 () {
  document.querySelector("#tab1").classList.remove("active");
  document.querySelector("#tab2").classList.remove("active");
  if (document.querySelector("#tab3").classList.contains("active") != true) {
  document.querySelector("#tab3").classList.add("active");
  }
}
 
tablinks[0].addEventListener("click", openTab0); 
tablinks[1].addEventListener("click", openTab1); 
tablinks[2].addEventListener("click", openTab2); 

