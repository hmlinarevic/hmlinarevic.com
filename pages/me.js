import ReactMarkdown from 'react-markdown'

const Me = ({ data }) => {
	return (
		<div>
			<h1 className="text-4xl font-bold text-center mb-8">about me</h1>
			<ReactMarkdown className="text-xl font-light leading-relaxed">
				{data}
			</ReactMarkdown>
		</div>
	)
}

export default Me

export async function getStaticProps() {
	const res = await fetch('https://strapi.hmlinarevic.com/api/hrvoje')
	const data = await res.json()
	const aboutMeText = data.data.attributes.about_me

	return {
		props: {
			data: aboutMeText,
		},
	}
}
