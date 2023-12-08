const sliderTours = document.querySelector('[data-slider="tours"]');
const buttonNext = document.querySelector('[data-button="tours-next"]');
const buttonPrev = document.querySelector('[data-button="tours-prev"]');

const initSliderTours = () => {
  if (sliderTours) {
    // eslint-disable-next-line
    new Swiper(sliderTours, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }
};

export {initSliderTours};
