window.addEventList.toggle('scroll', funtion()
    .classList.toggle('active', window.scrollY >0)
)




const animationImages = document.querySelectorAll('.gato');

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