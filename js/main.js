function getRandomValue(min, max) {
  if (
    (min < 0 || max < 0)
    (min === max)
  ) {
    return NaN;
  }

  if (min > max) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isStrLengthValid(str, maxLength, minLength = 20) {
  return str?.length >= minLength && str?.length <= maxLength;
}


getRandomValue(4, 1);
isStrLengthValid('12345', 4, 1);
