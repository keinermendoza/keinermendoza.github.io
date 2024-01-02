import { useState } from "react"
import { useEffect } from "react"
import { API_ADD_TEXT_TO_IMAGE, COLORS, FONTS, ALING, JUSTIFY } from "../constants"

export function useTextInImage({fact, imageUrl}) {
    const [imageTextUrl, setimageTextUrl] = useState('')

  useEffect(() => {
    if (!fact || !imageUrl) return

    const firstFiveWords = fact.split(' ', 5).join(' ')
    const imageText = `${API_ADD_TEXT_TO_IMAGE}?image_url=${imageUrl}&text=${firstFiveWords}&text_color=${COLORS.yellow}ff&text_size=${FONTS.md}&y_align=${ALING.bottom}&x_align=${JUSTIFY.center}`
    setimageTextUrl(imageText)

    }, [fact, imageUrl])

    return {imageTextUrl}
  }