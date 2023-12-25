import swiper from '../../vendor/swiper.js';

const sliderReviews = document.querySelector('[data-slider="reviews"]');
const buttonNext = document.querySelector('[data-button="reviews-next"]');
const buttonPrev = document.querySelector('[data-button="reviews-prev"]');

const initSliderReviews = () => {
  if (sliderReviews) {
    new swiper(sliderReviews, {

      slidesPerView: 'auto',
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      breakpoints: {
        1200: {
          initialSlide: 1,
          spaceBetween: 120,
        },

        768: {
          initialSlide: 1,
          spaceBetween: 30,
        },

        320: {
          initialSlide: 1,
          spaceBetween: 0,
        },
      },
    });
  }
};

export {initSliderReviews};
