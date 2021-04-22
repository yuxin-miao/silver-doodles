
export function simpleFetch(url: string) {
  return new Promise((resolve, reject) => {
    window.fetch(url)
      .then((res) => {
        if (res.ok) {
          res.json().then(resolve).catch(reject);
        } else {
          reject();
        }
      })
      .catch(reject);
  })
}