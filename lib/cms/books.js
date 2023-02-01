import { API_BASE_URL } from '../../config'

const ENDPOINT = '/api/books'

export const getBooksData = async () => {
  const res = await fetch(`${API_BASE_URL}${ENDPOINT}?populate=*`)

  const { data } = await res.json()

  const books = data.map((book) => {
    const { id } = book
    const { name, author, status, url, category } = book.attributes
    const coverUrl = book.attributes.cover.data.attributes.url

    return {
      id,
      name,
      author,
      category,
      coverUrl,
      url,
      status,
    }
  })

  const csAndWebDev = books.filter(
    (book) => book.category === 'computer science & web development'
  )
  const selfImprovement = books.filter(
    (book) => book.category === 'self improvement'
  )
  const novels = books.filter((book) => book.category === 'novel')

  return { csAndWebDev, selfImprovement, novels }
}
