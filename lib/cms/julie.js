export const getJuliesData = async () => {
  const response = await fetch(
    'https://strapi.hmlinarevic.com/api/julie?populate=*'
  )
  const { data } = await response.json()
  const { pictures } = data.attributes

  const intros = [
    data.attributes.intro_1,
    data.attributes.intro_2,
    data.attributes.intro_3,
  ]

  const photoUrls = pictures.data.map((picture) => {
    return picture.attributes.url
  })

  console.log(pictures)

  return {
    intros,
    photoUrls,
  }
}

getJuliesData()
