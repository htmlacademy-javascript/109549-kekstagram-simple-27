import { getMockedPhotos, PHOTOS_LENGTH } from './mock-data.js';

function renderPictures () {
  const mockedPhotosList = getMockedPhotos(PHOTOS_LENGTH);

  const picturesElement = document.querySelector('.pictures');
  const template = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const photosListFragment = document.createDocumentFragment();

  mockedPhotosList.forEach((item) => {
    const { url, likes, comments } = item;
    const photo = template.cloneNode(true);

    photo.querySelector('.picture__img').src = url;
    photo.querySelector('.picture__likes').textContent = likes;
    photo.querySelector('.picture__comments').textContent = comments;

    photosListFragment.append(photo);
  });

  picturesElement.append(photosListFragment);
}

export { renderPictures };
