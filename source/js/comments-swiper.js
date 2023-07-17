import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);


const swiper = new Swiper('.swiper-comments', {

  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      width: 320,
      slidesPerView: 1,
    },
    768: {
      centeredSlides: true,
      width: 720,
      slidesPerView: 1,
    },
    1200: {
      centeredSlides: true,
      width: 720,
      slidesPerView: 1,
    },
  },

  slidesPerGroup: 1,
  centeredSlides: true,
});

export {swiper};
