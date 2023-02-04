var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".cardSlider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// active class toggle function

function toggleActiveClass() {
  var activeClass = document.querySelector(".header-bar");
  var menu = document.querySelector(".menu");

  activeClass.classList.toggle("active");
  menu.classList.toggle("active");
}
