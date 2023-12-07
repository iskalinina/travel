/* в этот файл добавляет скрипты*/
const menuToggler = document.querySelector('[data-button="toggle-button"]');
const mainNav = document.querySelector('[data-menu="menu"]');

const onTogglerClick = () => {
  mainNav.classList.toggle('is-open');
  menuToggler.classList.toggle('is-open');
};

menuToggler.addEventListener('click', onTogglerClick);
