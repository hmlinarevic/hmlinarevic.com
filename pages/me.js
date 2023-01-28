import Link from 'next/link'

import ReactMarkdown from 'react-markdown'

import Section from '../components/layout/section'

import { getMyData } from '../lib/cms/me'

const Me = ({ about }) => {
  return (
    <Section title="About me">
      <ReactMarkdown className="text-lg leading-relaxed">{about}</ReactMarkdown>

      <p className="mt-5 text-lg leading-relaxed">
        If you want to know more, check out this{' '}
        <Link
          href="/blog/shoulders-of-giants"
          className="underline decoration-orange decoration-2 underline-offset-2 hover:bg-orange hover:text-white">
          
            article
          
        </Link>
        .
      </p>
    </Section>
  );
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
