import Section from '../../components/layout/section'
import ArticleItem from '../../components/article-item'

import { getArticlesData } from '../../lib/cms/articles'

export default function Blog({ articles }) {
  return (
    <>
      <Section title="Articles">
        <ul>
          {articles.map(({ id, details }) => (
            <ArticleItem key={id} {...details} />
          ))}
        </ul>
      </Section>
    </>
  )
}

export async function getStaticProps() {
  const articles = await getArticlesData()

  return {
    props: {
      articles,
    },
  }
}
