const imgPreview = document.querySelector('#upload-img');
const radioEffects = document.querySelectorAll('input[name="effect"]');
const fieldSetEffects = document.querySelector('.img-upload__effects');

fieldSetEffects.addEventListener('change', ({ target }) => {
  if (imgPreview.classList.length > 0) {
    const currentEffect = imgPreview.classList[0];

    imgPreview.classList.remove(currentEffect);
  }

  imgPreview.classList.add(`effects__preview--${target?.value}`);
  radioEffects.value = target?.value;
});
