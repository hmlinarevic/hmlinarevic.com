import Image from 'next/image'
import Link from 'next/link'

import ReactMarkdown from 'react-markdown'

import ArticleItem from '../components/article-item'
import MyPhoto from '../components/my-photo'
import SaveSvg from '../components/icons/save-svg'
import GithubSvg from '../components/icons/github-svg'
import HeroIcon from '../components/hero-icon'

import { getArticlesData } from '../lib/articles'
import '../lib/articles'

export default function Home({ data, articles }) {
	const imgUrl = data.profile_picture.data.attributes.url
	const hostAddress = 'https://strapi.hmlinarevic.com'
	const imgAddress = hostAddress + imgUrl

	return (
		<>
			<section className="flex justify-between">
				<div>
					<h1 className="text-5xl font-bold leading-tight mb-5">
						Hey, I'm Hrvoje.
					</h1>

					<p className="w-[340px] font-serif font-normal text-xl leading-relaxed">
						I like to <span className="text-[#619B60] font-bold">build</span>{' '}
						intuitive web apps and{' '}
						<span className="text-[#619B60] font-bold">design</span> algorithms.
						When I'm not at my computer, I'm most likely on a walk with my dog
						Julie.
					</p>

					<div className="w-[268px] mt-5 ml-[-0.5rem] flex justify-between">
						<Link href="/me">
							<a>
								<HeroIcon icon={<SaveSvg />} name="More about me" />
							</a>
						</Link>
						<Link href="https://github.com/hmlinarevic">
							<a target="_blank">
								<HeroIcon icon={<GithubSvg />} name="GitHub" />
							</a>
						</Link>
					</div>
				</div>
				<MyPhoto location={imgAddress} />
			</section>
			<section className="mt-24">
				<h2 className="text-3xl font-bold">A Bit About the Site</h2>
				<hr className="mt-2 mb-4" />
				<ReactMarkdown
					className="font-serif text-base"
					children={data.about_site}
				></ReactMarkdown>
			</section>
			<section className="mt-24">
				<h2 className="text-3xl font-bold">Latest Articles</h2>
				<hr className="mt-2 mb-4" />
				{articles.map(({ id, details }) => {
					return <ArticleItem key={id} {...details} />
				})}
			</section>
		</>
	)
}

export async function getStaticProps() {
	const res = await fetch(
		'https://strapi.hmlinarevic.com/api/hrvoje?populate=*'
	)
	let data
	data = await res.json()
	data = data.data.attributes

	const articles = await getArticlesData()

	return {
		props: {
			data,
			articles,
		},
	}
}
