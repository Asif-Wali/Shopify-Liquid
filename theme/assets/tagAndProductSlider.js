//Change Face Hair Body Tags
const faceTag = document.querySelector(".FaceTag");
const hairTag = document.querySelector(".HairTag");
const bodyTag = document.querySelector(".BodyTag");

const faceItems = document.querySelector(".faceSliderContainer");
const hairItems = document.querySelector(".hairSliderContainer");
const bodyItems = document.querySelector(".bodySliderContainer");

faceTag.addEventListener("click", () => {
  hairTag.classList.remove("active");
  bodyTag.classList.remove("active");
  faceTag.classList.add("active");

  hairItems.style.display = "none";

  bodyItems.style.display = "none";

  faceItems.style.display = "flex";
});

hairTag.addEventListener("click", () => {
  faceTag.classList.remove("active");
  bodyTag.classList.remove("active");
  hairTag.classList.add("active");

  faceItems.style.display = "none";

  bodyItems.style.display = "none";

  hairItems.style.display = "flex";
});

bodyTag.addEventListener("click", () => {
  faceTag.classList.remove("active");
  hairTag.classList.remove("active");
  bodyTag.classList.add("active");

  faceItems.style.display = "none";

  hairItems.style.display = "none";

  bodyItems.style.display = "flex";
});

var swiper = new Swiper(".myFaceProductSwiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
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
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
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

var swiper = new Swiper(".myHairProductSwiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 15,
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

var swiper = new Swiper(".myBodyProductSwiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  slidesPerGroup: 4,
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
      slidesPerView: 1,
      slidesPerGroup: 1,
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
