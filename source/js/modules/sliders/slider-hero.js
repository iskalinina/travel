const sliderHero = document.querySelector('[data-slider="hero"]');
const paginationHero = document.querySelector('[data-pagination="hero-pagination"]');

const initSliderHero = () => {
  if (sliderHero) {
    // eslint-disable-next-line
    new Swiper(sliderHero, {

      pagination: {
        el: paginationHero,
        clickable: true,
      },

      loop: true,
    });
  }
};

export {initSliderHero};
