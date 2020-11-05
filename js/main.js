
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

    // modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    // burger

    const menu = document.querySelector('.header__inner-nav-lists'),
    menuItem = document.querySelectorAll('.header__inner-nav-list'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('header__inner-nav-lists-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('header__inner-nav-lists-active');
        })
    })

    // slider


const slides = document.querySelectorAll(".slider__inner-wrapper"),
  dotsWrap = document.querySelector(".slider__indicators"),
  dots = document.querySelectorAll(".slider__indicators-dot");

let index = 0;

function showSlides(n) {
  if (n > slides.length) {
    index = 0;
  }
  if (n < 0) {
    index = slides.length - 1;
  }

  slides.forEach((item) => (item.style.display = "none"));

  dots.forEach((item) => item.classList.remove("slider__indicators-dot-active"));

  slides[index].style.display = "block";
  dots[index].classList.add("slider__indicators-dot-active");
}

showSlides(index);

dotsWrap.addEventListener("click", function (e) {
  for (let i = 0; i < dots.length; i++) {
    if (e.target.classList.contains("slider__indicators-dot") && e.target == dots[i]) {
      index = i;
      showSlides(index);
    }
  }
});