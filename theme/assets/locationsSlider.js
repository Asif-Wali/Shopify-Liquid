var swiper = new Swiper(".myLocationPicsSwiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  freeMode: true,
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1, // Start from the middle slide
  slidesOffsetBefore: 0, // No slides before the initial slide
  slidesOffsetAfter: 0, // No slides after the initial slide
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
    // Snaps slider position to slides when you release Scrollbar
    snapOnRelease: true,
    // Size (Length) of Scrollbar Draggable Element in px
    dragSize: "auto",
  },
});
