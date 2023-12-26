const menuToggler = document.querySelector('[data-button="toggle-button"]');
const mainNav = document.querySelector('[data-menu="menu"]');
const overlay = document.querySelector('[data-overlay="overlay"]');
const menuList = mainNav.querySelector('[data-list="menu-list"]');
const wrapper = document.querySelector('[data-wrapper="wrapper"]');


const onTogglerClick = () => {
  mainNav.classList.toggle('is-open');
  menuToggler.classList.toggle('is-open');
  overlay.classList.toggle('is-open');
  document.body.classList.toggle('is-open');
  wrapper.classList.toggle('wrapper--overlay');
};

menuToggler.addEventListener('click', onTogglerClick);

menuList.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'a') {
    onTogglerClick();
  }
});

overlay.addEventListener('click', onTogglerClick);
