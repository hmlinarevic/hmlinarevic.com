import ArticleItem from './article-item.js'

export default function ArticleList({ data }) {
	const content = data.map(({ id, details }) => (
		<ArticleItem key={id} {...details} />
	))

	return <ul>{content}</ul>
}
