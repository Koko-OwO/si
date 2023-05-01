



const animationImages = document.querySelectorAll('.gatoSubiendo');

function animateIn() {
  animationImages.forEach(image => {
    const elementTop = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      image.classList.add('animate-in');
    }
  });
}

window.addEventListener('scroll', animateIn);
window.addEventListener('load', animateIn);


const entra = document.querySelectorAll('.entrada');

function animateInS() {
  entra.forEach(image => {
    const elementLeft = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementLeft < windowHeight) {
      image.classList.add('animateentra');
    }
    
  });
}

window.addEventListener('scroll', animateInS);
window.addEventListener('load', animateInS);

// window.addEventListener("scroll", function(){
//   var nav = document.querySelector("slider");
//   nav.classList.toggle("tuki",this.window.scrollY>0)
// })

// window.addEventListener("scroll", function(){
//   var nav = document.querySelector(".container");
//   nav.classList.toggle("altu",this.window.scrollY>0)
// })

