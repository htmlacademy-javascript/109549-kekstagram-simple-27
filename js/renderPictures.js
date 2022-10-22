function renderPictures (photosList) {
  const picturesElement = document.querySelector('.pictures');
  const template = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const photosListFragment = document.createDocumentFragment();

  photosList.forEach((item) => {
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
