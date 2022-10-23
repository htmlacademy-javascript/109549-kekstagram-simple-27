import { isECSCode } from './utils.js';

const uploadInput = document.querySelector('#upload-file');
const formCloseButton = document.querySelector('#upload-cancel');
const imgUploadElement = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

function onModalOpen () {
  imgUploadElement.classList.remove('hidden');
  body.classList.add('modal-open');

  formCloseButton.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onModalByESCClose);
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
