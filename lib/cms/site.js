import { API_BASE_URL } from '../../config'

const ENDPOINT = '/api/website'

export const getSiteData = async () => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINT}`)
  const { data } = await response.json()

  const { about } = data.attributes

  return {
    about,
  }
}
