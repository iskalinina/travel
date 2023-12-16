import swiper from '../../vendor/swiper.js';

const sliderAdv = document.querySelector('[data-slider="advantages"]');
const buttonNext = document.querySelector('[data-button="advantages-next"]');
const buttonPrev = document.querySelector('[data-button="advantages-prev"]');

const desktop = window.matchMedia('(min-width: 1200px)');

const initSliderAdv = () => {
  if (sliderAdv && desktop.matches) {
    // eslint-disable-next-line
    new swiper(sliderAdv, {

      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: 2,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      spaceBetween: 30,
    });
  } else {
    swiper.destroy();
    console.log('destroy');
  }
};

export {initSliderAdv};
