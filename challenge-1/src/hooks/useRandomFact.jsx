import { useState } from 'react'
import { useEffect } from 'react'

import { getRandomFact } from '../services/facts'
import { getRandomImage } from '../services/images'

export function useRandomFact() {
    const [fact, setFact] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    function refreshFact() {
      getRandomFact().then((newFact) => setFact(newFact))
      getRandomImage().then((newImage) => setImageUrl(newImage))
    }

    // get random cat text
    useEffect(() => {
      refreshFact()
    }, [])

    return {fact, imageUrl, refreshFact}
  }