import { API_RANDOM_CAT_IMAGE } from "../constants"

export function getRandomImage() {
    return fetch(API_RANDOM_CAT_IMAGE)
    .then(res => res.json())
    .then(data => {
      const {url} = data[0]
      return url
  })
}