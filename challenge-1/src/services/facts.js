import { API_RANDOM_CAT_FACT } from "../constants"

export function getRandomFact() {
    return fetch(API_RANDOM_CAT_FACT)
    .then(res => res.json())
    .then(text => {
      const {fact} = text
      return fact
    })
  }