import { useState } from 'react'
import { useEffect } from 'react'

import { getRandomFact } from '../services/facts'
// import { getRandomImage } from '../services/images'

export function useRandomFact() {
    const [fact, setFact] = useState('')

    function refreshFact() {
      getRandomFact().then((newFact) => setFact(newFact))
    }

    // get random cat text
    useEffect(() => {
      refreshFact()
    }, [])

    return {fact, refreshFact}

  }