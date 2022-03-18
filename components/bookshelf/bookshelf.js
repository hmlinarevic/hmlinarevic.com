import Shelf from './shelf'
import Book from './book'

const Bookshelf = ({ name, books }) => {
  return (
    <section className="mb-24">
      <h2 className="text-2xl font-bold max-w-[250px]">{name}</h2>
      <hr className="mt-2 mb-8" />

      <Shelf
        name="Currently Reading"
        books={books.filter((book) => book.status === 'reading')}
      />
      <Shelf
        name="All-time Favorites"
        books={books.filter((book) => book.status === 'favorite')}
      />
    </section>
  )
}

export default Bookshelf
