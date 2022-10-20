import { getRandomValue } from './utils.js';

const PHOTOS_LENGTH = 25;
const LIKES = {
  min: 15,
  max: 200,
};
const COMMENTS = {
  min: 0,
  max: 200,
};


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

export { getMockedPhotos, PHOTOS_LENGTH, COMMENTS };
