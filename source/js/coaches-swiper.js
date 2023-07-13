import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);


const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    320: {
      width: 320,
      slidesPerView: 1,
    },
    768: {
      width: 710,
      slidesPerView: 2,
    },
    1200: {
      width: 1200,
      slidesPerView: 4,
    },
  },

  initialSlide: 2,

});

export {swiper};

