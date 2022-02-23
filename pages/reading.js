import Bookshelf from '../components/bookshelf/bookshelf'

const Reading = ({ csAndWebDev, selfImprovement, novels }) => {
	return (
		<>
			<Bookshelf
				name="Computer Science & Web Development"
				books={csAndWebDev}
			/>

			<Bookshelf name="Self Improvement" books={selfImprovement} />

			<Bookshelf name="Novels" books={novels} />
		</>
	)
}

export async function getStaticProps() {
	const res = await fetch('https://strapi.hmlinarevic.com/api/books?populate=*')

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
	const novel = books.filter((book) => book.category === 'novel')

	return {
		props: {
			csAndWebDev,
			selfImprovement,
			novels: novel,
		},
	}
}

export default Reading
