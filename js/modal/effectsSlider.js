const EFFECTS_MAP = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  NONE: 'none',
};

const FILTERS_TYPES_MAP = {
  [EFFECTS_MAP.CHROME]: 'grayscale',
  [EFFECTS_MAP.SEPIA]: 'sepia',
  [EFFECTS_MAP.MARVIN]: 'invert',
  [EFFECTS_MAP.PHOBOS]: 'blur',
  [EFFECTS_MAP.HEAT]: 'brightness',
  [EFFECTS_MAP.NONE]: '',
};

const VALUE_HANDLERS_MAP = {
  [EFFECTS_MAP.CHROME]: (value) => value,
  [EFFECTS_MAP.SEPIA]: (value) => value,
  [EFFECTS_MAP.MARVIN]: (value) => `${value}%`,
  [EFFECTS_MAP.PHOBOS]: (value) => `${value}px`,
  [EFFECTS_MAP.HEAT]: (value) => value,
  [EFFECTS_MAP.NONE]: () => '',
};

const sliderElement = document.querySelector('.effect-level__slider');
const effectValueElement = document.querySelector('.effect-level__value');
const imageUploadElement = document.querySelector('.img-upload__effects');
const imgPreview = document.querySelector('#upload-img');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  connect: 'lower',
});

sliderElement.noUiSlider?.on('update', () => {
  const checkedEffect = document.querySelector('input[name="effect"]:checked');
  const checkedValue = checkedEffect?.value;
  const isNoneEffect = checkedValue === EFFECTS_MAP.NONE;

  if (isNoneEffect) {
    sliderElement.setAttribute('disabled', true);
  } else {
    sliderElement.removeAttribute('disabled');
    sliderElement.style.display = 'block';
  }

  const sliderValue = sliderElement.noUiSlider.get();
  const valueHandler = VALUE_HANDLERS_MAP[checkedValue];
  const newValue = isNoneEffect ? '' : sliderValue;

  effectValueElement.value = newValue;
  imgPreview.style.filter = isNoneEffect ? 'none' : `${FILTERS_TYPES_MAP[checkedValue]}(${valueHandler(newValue)})`;
});

imageUploadElement.addEventListener('change', (e) => {
  const { target } = e;

  if (target?.value === EFFECTS_MAP.NONE) {
    sliderElement.setAttribute('disabled', true);
    sliderElement.style.display = 'none';
    imgPreview.style.filter = 'none';
    effectValueElement.value = '';
  }

  switch (target?.value) {
    case EFFECTS_MAP.SEPIA:
    case EFFECTS_MAP.CHROME: {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(1);
      break;
    }
    case EFFECTS_MAP.MARVIN: {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1
      });
      sliderElement.noUiSlider.set(100);
      break;
    }
    case EFFECTS_MAP.PHOBOS: {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(3);
      break;
    }
    case EFFECTS_MAP.HEAT: {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1
      });
      sliderElement.noUiSlider.set(3);
      break;
    }
  }
});
