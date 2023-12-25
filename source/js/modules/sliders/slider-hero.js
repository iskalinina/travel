import swiper from '../../vendor/swiper.js';

const sliderHero = document.querySelector('[data-slider="hero"]');
const paginationHero = document.querySelector('[data-pagination="hero-pagination"]');

const initSliderHero = () => {
  if (sliderHero) {
    new swiper(sliderHero, {

      pagination: {
        el: paginationHero,
        clickable: true,
      },

      loop: true,
    });
  }
};

export {initSliderHero};
