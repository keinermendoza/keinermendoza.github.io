const API_CATAAS = 'https://cataas.com/cat/'
const API_CUSTOM = 'https://keinermendoza.pythonanywhere.com/api_cat/random/'

export function getCaatasImage(text) {
  return fetch(`${API_CATAAS}says/${text}?json=true`)
  .then(res => res.json())
  .then(data => {
    const id = data._id
    return `${API_CATAAS}${id}`
  })
}


export function getCustomAPIImage(text) {
  return fetch(`${API_CUSTOM}?text=${text}`)
  .then(res => res.json())
  .then(data => {
    const {url} = data
    return url
  })
}
