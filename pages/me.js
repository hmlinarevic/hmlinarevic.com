import Link from 'next/link'

import ReactMarkdown from 'react-markdown'

import Intro from '../components/intro'
import Section from '../components/section'

import { getMyData } from '../lib/cms/me'

const Me = ({ about }) => {
  return (
    <>
      <Intro title="about me">
        Tall, strong, blonde and beautiful with blue eyes - as one Croatian
        comedian would say when talking about himself on stage. In reality, he
        is short and chubby but he's got charisma.
      </Intro>
      <hr className="w-[60px] mx-auto mt-[-2.5rem] mb-12" />

      <ReactMarkdown className="text-xl leading-relaxed">{about}</ReactMarkdown>

      <p className="text-xl leading-relaxed mt-5">
        If you want to know more, check out this{' '}
        <Link href="/blog/shoulders-of-giants">
          <a className="underline decoration-[#619B60] underline-offset-2 hover:bg-[#619B60] hover:text-[#fff]">
            article
          </a>
        </Link>
        .
      </p>

      <Section className="mt-24" title="Courses"></Section>
    </>
  )
}

export default Me

export async function getStaticProps() {
  const { about } = await getMyData()

  return {
    props: {
      about,
    },
  }
}
