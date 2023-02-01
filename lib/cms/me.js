import { API_BASE_URL } from '../../config'

const ENDPOINT = '/api/me'

export const getMyData = async () => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINT}?populate=*`)
  const { data } = await response.json()

  const { about, picture } = data.attributes
  const { url: imgUrl } = picture.data.attributes

  return {
    about,
    imgUrl,
  }
}
