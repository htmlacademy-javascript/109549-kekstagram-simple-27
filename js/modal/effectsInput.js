const imgPreview = document.querySelector('.img-upload__preview');
const radioEffects = document.querySelectorAll('input[name="effect"]');
const fieldSetffects = document.querySelector('.img-upload__effects');

fieldSetffects.addEventListener('change', ({ target }) => {
  if (imgPreview.classList.length > 1) {
    const currentEffect = imgPreview.classList[1];

    imgPreview.classList.remove(currentEffect);
  }

  imgPreview.classList.add(`effects__preview--${target?.value}`);
  radioEffects.value = target?.value;
});
