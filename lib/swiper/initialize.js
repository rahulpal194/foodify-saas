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

    var swiper = new Swiper(".reviewSwiper", {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      speed:4500,
            autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      easing : 'linear',
      freeMode: true
    })