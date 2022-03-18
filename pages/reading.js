import Bookshelf from '../components/bookshelf/bookshelf'
import Intro from '../components/intro'
import Title from '../components/title'

import { getBooksData } from '../lib/cms/books'

export default function Reading({ books }) {
  return (
    <>
      <Intro title="reading">Books I'm reading and some of my favorites</Intro>

      <Bookshelf
        name="Computer Science & Web Development"
        books={books.csAndWebDev}
      />

      <Bookshelf name="Personal Development" books={books.selfImprovement} />

      <Bookshelf name="Novels" books={books.novels} />
    </>
  )
}

export async function getStaticProps() {
  const books = await getBooksData()

  return {
    props: {
      books,
    },
  }
}
