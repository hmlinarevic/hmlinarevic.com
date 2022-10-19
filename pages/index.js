import { useState } from 'react'

import ReactMarkdown from 'react-markdown'

import Section from '../components/layout/section'
import Hero from '../components/layout/hero'
import ArticleList from '../components/article/article-list'
import ProjectLink from '../components/projects/project-link'

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
        <ProjectLink url="https://www.crosswit.io" />
      </Section>

      <Section title="Latest Articles">
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
