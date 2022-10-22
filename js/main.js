import { getMockedPhotos, PHOTOS_LENGTH } from './mock-data.js';
import { renderPictures } from './renderPictures.js';

renderPictures(getMockedPhotos(PHOTOS_LENGTH));
