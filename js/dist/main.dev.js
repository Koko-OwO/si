"use strict";

var animationImages = document.querySelectorAll('.gatoSubiendo');

function animateIn() {
  animationImages.forEach(function (image) {
    var elementTop = image.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      image.classList.add('animate-in');
    }
  });
}

window.addEventListener('scroll', animateIn);
window.addEventListener('load', animateIn);
var entra = document.querySelectorAll('.entrada');

function animateInS() {
  entra.forEach(function (image) {
    var elementLeft = image.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (elementLeft < windowHeight) {
      image.classList.add('animateentra');
    }
  });
}

window.addEventListener('scroll', animateInS);
window.addEventListener('load', animateInS); // window.addEventListener("scroll", function(){
//   var nav = document.querySelector("slider");
//   nav.classList.toggle("tuki",this.window.scrollY>0)
// })
// window.addEventListener("scroll", function(){
//   var nav = document.querySelector(".container");
//   nav.classList.toggle("altu",this.window.scrollY>0)
// })