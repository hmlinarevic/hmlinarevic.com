import ReactMarkdown from 'react-markdown'

import { parseISO, format } from 'date-fns'

import { getAllArticleSlugs, getArticleData } from '../../lib/cms/articles'

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

export default function Article({ articleData }) {
  const { content, title, publishedAt } = articleData.attributes

  const date = parseISO(publishedAt)

  return (
    <>
      <span className="mb-4 block text-center font-light">
        Written by <span className="font-bold">Hrvoje Mlinarevic</span> on{' '}
        <time dateTime={publishedAt}>{format(date, 'LLLL d, yyyy')}</time>
      </span>
      <h1 className="text-center text-4xl font-bold">{title}</h1>
      <hr className="my-10 mx-auto w-[120px] border-black border-opacity-20" />
      <ReactMarkdown
        className="font-serif text-lg leading-relaxed"
        children={content}
      />
    </>
  )
}
