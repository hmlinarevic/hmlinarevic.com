import { useState } from 'react'

import ReactMarkdown from 'react-markdown'

import Section from '../components/layout/section'
import Hero from '../components/layout/hero'
import ArticleItem from '../components/article-item'
import ProjectLink from '../components/project-link'

import { getMyData } from '../lib/cms/me'
import { getSiteData } from '../lib/cms/site'
import { getArticlesData } from '../lib/cms/articles'

export default function Home({ me, site, articles }) {
  return (
    <>
      <Section>
        <Hero imgUrl={me.imgUrl} />
      </Section>

      <Section title="A Bit About the Site">
        <ReactMarkdown className="text-lg" children={site.about} />
      </Section>

      <Section title="Projects">
        <ProjectLink url="https://www.crosswit.io" label="crosswit" />
      </Section>

      <Section title="Latest Articles">
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
