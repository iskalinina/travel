import swiper from '../../vendor/swiper.js';

const sliderReviews = document.querySelector('[data-slider="reviews"]');
const buttonNext = document.querySelector('[data-button="reviews-next"]');
const buttonPrev = document.querySelector('[data-button="reviews-prev"]');

const initSliderReviews = () => {
  if (sliderReviews) {
    // eslint-disable-next-line
    new swiper(sliderReviews, {

      slidesPerView: 'auto',
      centeredSlides: true,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      breakpoints: {
        1200: {
          initialSlide: 0,
          spaceBetween: 120,
        },

        768: {
          initialSlide: 0,
          spaceBetween: 30,
        },

        320: {
          initialSlide: 0,
          spaceBetween: 0,
        },
      },
    });
  }
};

export {initSliderReviews};
