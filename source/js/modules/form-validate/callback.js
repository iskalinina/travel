
const baseSuccessCallback = (event) => {
  event.preventDefault();
  const submitButton = document.querySelector('[data-submit="submit"]');
  submitButton.disabled = true;

  const url = 'https://echo.htmlacademy.ru/';
  const formData = new FormData(document.querySelector('[data-form="data-form"]'));

  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => response.text()).then((data) => {
    document.body.innerHTML = `<pre>${data}</pre>`;
  }).catch(() => {
    document.body.innerHTML = 'Ошибка: не удалось отправить форму на сервер';
  });

  submitButton.disabled = false;
};

const baseErrorCallback = (event) => {
  event.preventDefault();
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
