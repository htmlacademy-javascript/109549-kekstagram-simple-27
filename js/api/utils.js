export function request(address, params) {
  return fetch(address, params)
    .then((response) => {
      if (response.ok) {
        return response;
      }

      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((data) => data.json());
}
