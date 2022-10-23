import { removeLastChar, toNumber } from './utils.js';

const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP = 25;

const plusButton = document.querySelector('.scale__control--bigger');
const minusButton = document.querySelector('.scale__control--smaller');
const input = document.querySelector('input[name="scale"]');
const imgPreview = document.querySelector('.img-upload__preview');

plusButton.addEventListener('click', () => {
  const currentValue = input.value;
  const numberValue = toNumber(removeLastChar(currentValue));

  if (numberValue && numberValue < MAX_SCALE) {
    const newValue = numberValue + STEP;

    input.value = `${newValue}%`;
    imgPreview.style.transform = `scale(${newValue / 100})`;
  }
});

minusButton.addEventListener('click', () => {
  const currentValue = input.value;
  const numberValue = toNumber(removeLastChar(currentValue));

  if (numberValue && numberValue > MIN_SCALE) {
    const newValue = numberValue - STEP;

    input.value = `${newValue}%`;
    imgPreview.style.transform = `scale(${newValue / 100})`;
  }
});
