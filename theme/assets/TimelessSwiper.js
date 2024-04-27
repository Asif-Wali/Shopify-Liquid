var swiper = new Swiper(".myTimelessSwiper", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 25,
      slidesPerGroup: 1,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 25,
      slidesPerGroup: 3,
    },
  },
});
