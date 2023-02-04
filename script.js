var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});

var swiper = new Swiper(".cardSlider", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

// active class toggle function

function toggleActiveClass() {
  var activeClass = document.querySelector(".header-bar");
  var menu = document.querySelector(".menu");

  activeClass.classList.toggle("active");
  menu.classList.toggle("active");
}
