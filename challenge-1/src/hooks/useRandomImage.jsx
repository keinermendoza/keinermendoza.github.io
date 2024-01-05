import { useState } from "react"
import { useEffect } from "react"
// import { getCaatasImage } from '../services/images'


export function useRandomImage({fact, imageService}) {
    const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return

    const firstFiveWords = fact.split(' ', 5).join(' ')
    imageService(firstFiveWords).then(image => setImageUrl(image))

    }, [fact])

    return {imageUrl}
  }