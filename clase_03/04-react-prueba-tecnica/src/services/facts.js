const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}


// export async function getImgFact() {
//   if (!fact) return
//   const firstWord = fact.split('')[0]

//   const res = await fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
//   const response = res.url
//   const url = response
//   return url
// }

