var swiper = new Swiper(".mytestimonialSwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loopFillGroupWithBlank: true,
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
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 25,
      slidesPerGroup: 2,
    },

    950: {
      slidesPerView: 3,
      spaceBetween: 25,
      slidesPerGroup: 3,
    },

    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
    },
  },
});