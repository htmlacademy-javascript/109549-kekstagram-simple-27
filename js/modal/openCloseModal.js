import { isECSCode } from './utils.js';
import Api from '../api/index.js';

const uploadInput = document.querySelector('#upload-file');
const formCloseButton = document.querySelector('#upload-cancel');
const imgUploadElement = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const closeModalBtn = form.querySelector('.img-upload__cancel');
const imgPreview = document.querySelector('.img-upload__preview');
const templateSuccess = document.querySelector('#success')
  .content
  .querySelector('.success');
const successElement = templateSuccess.cloneNode(true);
const successBtn = successElement.querySelector('.success__button');
const templateError = document.querySelector('#error')
  .content
  .querySelector('.error');
const errorElement = templateError.cloneNode(true);
const errorBtn = errorElement.querySelector('.error__button');

function onSuccessModalClose () {
  successElement.remove();
  document.removeEventListener('keydown', onSuccessModalByESCClose);
  window.removeEventListener('click', onSuccessModalByWindowClose);
}

function onSuccessModalByESCClose(e) {
  if (isECSCode(e.keyCode)) {
    onSuccessModalClose();
  }
}

function onSuccessModalByWindowClose (e) {
  const successInner = successElement.querySelector('.success__inner');

  if (!successInner.contains(e.target)) {
    onSuccessModalClose();
  }
}

function onSuccessModalOpen () {
  body.append(successElement);
  successBtn.addEventListener('click', onSuccessModalClose);
  document.addEventListener('keydown', onSuccessModalByESCClose);
  window.addEventListener('click', onSuccessModalByWindowClose);
}

function onErrorModalClose () {
  errorElement.remove();
  document.removeEventListener('keydown', onErrorModalByESCClose);
  window.removeEventListener('click', onErrorModalByWindowClose);
}

function onErrorModalByESCClose(e) {
  if (isECSCode(e.keyCode)) {
    onErrorModalClose();
  }
}

function onErrorModalByWindowClose (e) {
  const errorInner = errorElement.querySelector('.error__inner');

  if (!errorInner.contains(e.target)) {
    onErrorModalClose();
  }
}

function onErrorModalOpen () {
  body.append(errorElement);
  errorBtn.addEventListener('click', onErrorModalClose);
  document.addEventListener('keydown', onErrorModalByESCClose);
  window.addEventListener('click', onErrorModalByWindowClose);
}

function onModalReset () {
  form.reset();

  imgPreview.style.transform = 'scale(1)';
  imgPreview.style.filter = 'none';
}

function submit (e) {
  e.preventDefault();

  Api.publishPhoto(new FormData(e.target))
    .then(() => {
      onModalClose();
      onModalReset();
    })
    .then(() => {
      onSuccessModalOpen();
    })
    .catch(() => {
      onErrorModalOpen();
    });
}

function onModalOpen () {
  imgUploadElement.classList.remove('hidden');
  body.classList.add('modal-open');

  formCloseButton.addEventListener('click', onModalClose);
  form.addEventListener('submit', submit);
  document.addEventListener('keydown', onModalByESCClose);
  closeModalBtn.addEventListener('click', onModalReset);
}

function onModalClose () {
  imgUploadElement.classList.add('hidden');
  body.classList.remove('modal-open');

  formCloseButton.removeEventListener('click', onModalClose);
  uploadInput.value = '';
  document.removeEventListener('keydown', onModalByESCClose);
}

function onModalByESCClose(e) {
  if (isECSCode(e.keyCode)) {
    onModalClose();
  }
}

uploadInput.addEventListener('click', onModalOpen);
