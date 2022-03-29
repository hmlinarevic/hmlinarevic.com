import Section from '../section'
import Shelf from './shelf'

const Bookshelf = ({ name, books }) => {
  return (
    <Section className="mb-24" title={name}>
      <Shelf
        name="Currently Reading"
        books={books.filter((book) => book.status === 'reading')}
      />
      <Shelf
        name="All-time Favorites"
        books={books.filter((book) => book.status === 'favorite')}
      />
    </Section>
  )
}

export default Bookshelf
