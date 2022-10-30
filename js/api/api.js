import { request } from "./utils.js";

const SERVER_URL = 'https://27.javascript.pages.academy/kekstagram-simple';
const USERS_PHOTOS_URL = `${SERVER_URL}/data`;

export function fetchUsersPhotos() {
  return request(USERS_PHOTOS_URL);
}

export function publishPhoto(formData) {
  const params = {
    method: 'POST',
    body: formData,
  }

  return request(SERVER_URL, params);
}
