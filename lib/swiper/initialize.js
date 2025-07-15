    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper = new Swiper(".partnerSwiper", {
        loop: true,
        slidesPerView : 'auto',
        spaceBetween: 30,
        speed:1000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      }
    })