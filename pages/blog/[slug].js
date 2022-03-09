import ReactMarkdown from 'react-markdown'

import Date from '../../components/date'

import { getAllArticleSlugs, getArticleData } from '../../lib/articles'

export const getStaticPaths = async () => {
	const paths = await getAllArticleSlugs()
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params }) => {
	const articleData = await getArticleData(params.slug)
	return {
		props: {
			articleData,
			params,
		},
	}
}

export default function Blog({ articleData }) {
	const { content, title, publishedAt } = articleData.attributes
	console.log(articleData)
	return (
		<>
			<span className="font-light block text-center mb-4">
				Written by <span className="font-bold">Hrvoje Mlinarevic</span> on{' '}
				<Date dateString={publishedAt} />
			</span>
			<h1 className="text-4xl font-bold text-center">{title}</h1>
			<hr className="w-[120px] my-10 mx-auto" />
			<ReactMarkdown className="font-serif">{content}</ReactMarkdown>
		</>
	)
}
