const video = document.querySelector('[data-video="video"]');
const poster = video.querySelector('[data-poster="poster"]');
const button = video.querySelector('[data-button="play-button"]');

const createIframe = () => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('allowfullscreen', '');
  iframe.classList.add('hero__media-poster');
  video.appendChild(iframe);
};

const setupVideo = () => {
  button.addEventListener('click', () => {
    button.remove();
    poster.remove();
    createIframe();
  });
};

export {setupVideo};
