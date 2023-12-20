const sliderTrainings = document.querySelector('[data-slider="trainings"]');
const buttonNext = document.querySelector('[data-button="trainings-next"]');
const buttonPrev = document.querySelector('[data-button="trainings-prev"]');

const initSliderTrainings = () => {
  if (sliderTrainings) {
    // eslint-disable-next-line
    new Swiper(sliderTrainings, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      breakpoints: {
        1200: {
          initialSlide: 1,
          slidesPerView: 4,
          spaceBetween: 20,
        },

        768: {
          initialSlide: 1,
          slidesPerView: 3,
          spaceBetween: 20,
        },

        320: {
          initialSlide: 3,
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }
};

export {initSliderTrainings};
