import Section from '../../components/section'
import ArticleList from '../../components/article/article-list'

import { getArticlesData } from '../../lib/cms/articles'
import Title from '../../components/title'
import Intro from '../../components/intro'

export default function Blog({ articles }) {
  return (
    <>
      <Intro title="articles">
        5-minute reads, mostly on the topic of personal development, but
        sometimes on the topic of anything and everything
      </Intro>
      <Section className="mt-24" title="2022">
        <ArticleList data={articles} />
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
