import Section from '../components/section'
import Hero from '../components/hero'
import Text from '../components/text'
import ArticleList from '../components/article/article-list'

import { getMyData } from '../lib/cms/me'
import { getSiteData } from '../lib/cms/site'
import { getArticlesData } from '../lib/cms/articles'
import Image from 'next/image'

import hexagonSvg from '../public/hexagon.svg'

export default function Home({ me, site, articles }) {
  return (
    <>
      <Section>
        <Hero imgUrl={me.imgUrl} />
      </Section>

      <Section className="mt-24" title="A Bit About the Site">
        <Text className="font-serif text-lg" data={site.about} />
      </Section>

      <Section className="mt-24" title="Projects">
        <Text className="font-serif text-lg" />

        <a href="https://www.crosswit.io">
          <div className="w-[calc(100%+40px)] ml-[-20px]">
            <div className="mt-10 py-[10px] px-[20px] flex  items-center cursor-pointer rounded-xl border-white hover:border-orange hover:border-opacity-50 border transition-colors hover:bg-orange hover:bg-opacity-5">
              <Image src={hexagonSvg} alt="hexagon" />
              <span className="ml-3 ">crosswit</span>
            </div>
          </div>
        </a>
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
