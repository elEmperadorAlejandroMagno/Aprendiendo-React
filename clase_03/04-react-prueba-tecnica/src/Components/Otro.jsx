import { useCatImage } from "../hooks/useCatImage";

export function Otro ({ fact }) {

  const { imageUrl } = useCatImage({ fact })

  return (
    <>
      {imageUrl && <img src={imageUrl} alt={`imagen utilizando las palabras del hecho ${fact}`} />}
    </>
  )
}