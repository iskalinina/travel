const sliderGallery = document.querySelector('[data-slider="gallery"]');
const buttonNext = document.querySelector('[data-button="gallery-next"]');
const buttonPrev = document.querySelector('[data-button="gallery-prev"]');

const initSliderGallery = () => {
  if (sliderGallery) {
    // eslint-disable-next-line
    new Swiper(sliderGallery, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 5,
          slidesPerGroup: 2,
          initialSlide: 5,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 5,
          slidesPerGroup: 2,
          initialSlide: 5,
        },

        320: {
          slidesPerView: 2,
          spaceBetween: 3,
          slidesPerGroup: 2,
          initialSlide: 0,
        },
      },
    });
  }
};

export {initSliderGallery};
