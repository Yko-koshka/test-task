
// modal

const modalTrigger = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.overlay'),
modalClose = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
    });
})

function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
})

// burger

const menu = document.querySelector('.header-inner__lists'),
menuItem = document.querySelectorAll('.header-inner__list'),
hamburger = document.querySelector('.header-hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header-hamburger__active');
    menu.classList.toggle('header-inner__lists-active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('header-hamburger__active');
        menu.classList.toggle('header-inner__lists-active');
    })
})

// slider


const slides = document.querySelectorAll(".slider-wrapper"),
  dotsWrap = document.querySelector(".slider-indicators"),
  dots = document.querySelectorAll(".slider-indicators__dot");

let index = 0;

function showSlides(n) {
  if (n > slides.length) {
    index = 0;
  }
  if (n < 0) {
    index = slides.length - 1;
  }

  slides.forEach((item) => (item.style.display = "none"));

  dots.forEach((item) => item.classList.remove("slider-indicators__dot-active"));

  slides[index].style.display = "block";
  dots[index].classList.add("slider-indicators__dot-active");
}

showSlides(index);

dotsWrap.addEventListener("click", function (e) {
  for (let i = 0; i < dots.length; i++) {
    if (e.target.classList.contains("slider-indicators__dot") && e.target == dots[i]) {
      index = i;
      showSlides(index);
    }
  }
});