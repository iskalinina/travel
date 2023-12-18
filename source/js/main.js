import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initSliderHero} from './modules/sliders/slider-hero';
import {initSliderTours} from './modules/sliders/slider-tours';
import {initSliderTrainings} from './modules/sliders/slider-trainings';
import {initSliderReviews} from './modules/sliders/slider-reviews';
import {initSliderAdv} from './modules/sliders/slider-advantages';
import {initSliderGallery} from './modules/sliders/slider-gallery';
import {setupVideo} from './modules/video/init-video';
import './modules/menu/toggler.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  initSliderHero();
  initSliderTours();
  initSliderTrainings();
  initSliderReviews();
  initSliderAdv();
  initSliderGallery();
  setupVideo();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
