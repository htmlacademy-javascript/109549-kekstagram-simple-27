import Api from './api/index.js';
import './modal/index.js';
import { renderPictures } from './renderPictures.js';

const template = document.querySelector('#data-error')
  .content
  .querySelector('.error');
const body = document.querySelector('body');

Api.fetchUsersPhotos().then((data) => {
  renderPictures(data);
})
  .catch((error) => {
    const errorElement = template.cloneNode(true);

    errorElement.querySelector('.error__button').textContent = error.message;
    body.append(errorElement);
  });
