import { useEffect, useState } from "react"

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if(!fact) return    
      const firstWord = fact.split(' ')[0]
      // para mas de una palabra
      const words = fact.split(' ').slice(0, 3).join(' ') // fact.split(' ', 3)

      fetch(`https://cataas.com/cat/says/${words}?fontSize=50&fontColor=red`)
        .then(res => res.url)
        .then(response => {
          const url = response
          setImageUrl(url)
  })
  }, [fact])
  return { imageUrl }
}