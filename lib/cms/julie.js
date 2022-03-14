export const getJuliesData = async () => {
  const response = await fetch(
    'https://strapi.hmlinarevic.com/api/julie?populate=*'
  )
  const { data } = await response.json()

  const intros = [
    data.attributes.intro_1,
    data.attributes.intro_2,
    data.attributes.intro_3,
  ]

  const photos = [
    { ...data.attributes.photo_1.data },
    { ...data.attributes.photo_2.data },
    { ...data.attributes.photo_3.data },
  ]

  return {
    intros,
    photos,
  }
}

getJuliesData()
