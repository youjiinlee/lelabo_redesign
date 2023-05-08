var swiper = new Swiper('.swiper', {

  loop: true,

  autoplay: {
    delay: 2000,
  },
  //자동재생

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

var swiper = new Swiper('.swiper2', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 2000,
  },
  // 자동재생

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {

    767: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1023: {
      slidesPerView: 2,
      spaceBetween: 0,
    },

    1919: {

      slidesPerView: 3,
      spaceBetween: 0,
    },

    2000: {

      slidesPerView: 3,
      spaceBetween: 0,
    },
  },

});


var swiper = new Swiper('.swiper3', {
  // Optional parameters
  // direction: 'horizontal',
  // loop: true,

  autoplay: {
    delay: 2000,
  },
  //자동재생

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    767: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1023: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    1919: {
      slidesPerView: 4,
      spaceBetween: -50,
    },


    4000: {
      slidesPerView: 4,
      spaceBetween: -50,
    },
  },

});

var swiper = new Swiper('.swiper4', {

  // loop: true,

  // autoplay: {
  //   delay: 2000,
  // },
  //자동재생

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    767: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1023: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    1919: {
      slidesPerView: 1,
      spaceBetween: 0,
    },


    2000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});