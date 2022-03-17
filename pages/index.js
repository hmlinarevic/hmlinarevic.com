import Section from '../components/section'
import Hero from '../components/hero'
import Text from '../components/text'
import ArticleList from '../components/article/article-list'

import { getMyData } from '../lib/cms/me'
import { getSiteData } from '../lib/cms/site'
import { getArticlesData } from '../lib/cms/articles'

export default function Home({ me, site, articles }) {
  return (
    <>
      <Section>
        <Hero imgUrl={me.imgUrl} />
      </Section>

      <Section className="mt-24" title="A Bit About the Site">
        <Text className="font-serif text-lg" data={site.about} />
      </Section>

      <Section className="mt-20" title="Latest Articles">
        <ArticleList data={articles} />
      </Section>
    </>
  )
}

export async function getStaticProps() {
  const me = await getMyData()
  const site = await getSiteData()
  const articles = await getArticlesData()

  return {
    props: {
      me,
      site,
      articles,
    },
  }
}
