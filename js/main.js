const PHOTOS_LENGTH = 25;
const LIKES = {
  min: 15,
  max: 200,
};
const COMMENTS = {
  min: 0,
  max: 200,
};

function getRandomValue(min, max) {
  if (
    (min < 0 || max < 0) ||
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

function getMockedPhotos(length) {
  return Array.from(new Array(length), (_, index) => {
    const id = index + 1;

    return {
      id,
      url: `photos/${id}.jpg`,
      description: `Описание ${id}`,
      likes: getRandomValue(LIKES.min, LIKES.max),
      comments: getRandomValue(COMMENTS.min, COMMENTS.max)
    };
  });
}

getMockedPhotos(PHOTOS_LENGTH);
getRandomValue(4, 1);
isStrLengthValid('12345', 4, 1);
