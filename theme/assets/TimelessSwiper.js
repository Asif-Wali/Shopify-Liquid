
   var swiper = new Swiper(".myTimelessSwiper", {
     slidesPerView: 1,
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     breakpoints: {
    
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },  
  }
   });
