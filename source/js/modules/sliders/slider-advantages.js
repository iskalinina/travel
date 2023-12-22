import swiper from '../../vendor/swiper.js';

const sliderAdv = document.querySelector('[data-slider="advantages"]');
const buttonNext = document.querySelector('[data-button="advantages-next"]');
const buttonPrev = document.querySelector('[data-button="advantages-prev"]');

const desktop = window.matchMedia('(min-width: 1200px)');

let swiperInner;

function initSliderAdv() {
  if (sliderAdv && desktop.matches) {
    // eslint-disable-next-line
    swiperInner = new swiper(sliderAdv, {
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
  }
}

const onResize = () => {
  if (sliderAdv && !desktop.matches && swiperInner) {
    swiperInner.destroy();
  } else if ((swiperInner && !swiperInner.initialized) || !swiperInner) {
    initSliderAdv();
  }
};

window.addEventListener('resize', onResize);

export {initSliderAdv};

