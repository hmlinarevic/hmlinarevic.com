import Book from './book'

const Shelf = ({ name, books }) => {
	return (
		<>
			<h3 className="font-bold">{name}</h3>
			<ul className="mb-8 flex justify-between">
				{books.map((book) => (
					<Book key={book.id} {...book} />
				))}
			</ul>
		</>
	)
}

export default Shelf
