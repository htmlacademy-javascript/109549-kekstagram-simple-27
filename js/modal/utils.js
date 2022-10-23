const ESC_KEY_CODE = 27;

function isECSCode (keyCode) {
  return keyCode === ESC_KEY_CODE;
}

function removeLastChar (str) {
  return str ? str.slice(0 , -1) : str;
}

function toNumber (str) {
  return Number(str);
}

export { isECSCode, removeLastChar, toNumber };
