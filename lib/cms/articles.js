import { API_BASE_URL } from '../../config'

const ENDPOINT = '/api/articles'

export const getArticleData = async (slug) => {
  const query = `${ENDPOINT}?filters[slug][$eq]=${slug}`

  const response = await fetch(`${API_BASE_URL}${query}`)
  const { data } = await response.json()
  const [article] = data

  return article
}

export const getArticlesData = async () => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINT}`)
  const { data } = await response.json()

  return data.map((entry) => {
    return {
      id: entry.id,
      details: entry.attributes,
    }
  })
}

export const getAllArticleSlugs = async () => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINT}`)
  const { data } = await response.json()

  return data.map((entry) => {
    return {
      params: {
        slug: entry.attributes.slug,
      },
    }
  })
}
