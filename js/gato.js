

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