/* в этот файл добавляет скрипты*/
const menuToggler = document.querySelector('[data-button="toggle-button"]');
const mainNav = document.querySelector('[data-menu="menu"]');
const wrapper = document.querySelector('[data-wrapper="wrapper"]');

const onTogglerClick = () => {
  mainNav.classList.toggle('is-open');
  menuToggler.classList.toggle('is-open');
  wrapper.classList.toggle('wrapper--overlay');
};

menuToggler.addEventListener('click', onTogglerClick);
