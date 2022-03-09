export const getArticlesData = async () => {
	const response = await fetch('https://strapi.hmlinarevic.com/api/articles')
	const { data } = await response.json()
	return data.map((entry) => {
		return {
			id: entry.id,
			details: entry.attributes,
		}
	})
}

export const getArticleData = async (slug) => {
	const query = `api/articles?filters[slug][$eq]=${slug}`
	const response = await fetch(`https://strapi.hmlinarevic.com/${query}`)
	const {
		data: [article],
	} = await response.json()
	return article
}

export const getAllArticleSlugs = async () => {
	const response = await fetch('https://strapi.hmlinarevic.com/api/articles')
	const { data } = await response.json()
	return data.map((entry) => {
		return {
			params: {
				slug: entry.attributes.slug,
			},
		}
	})
}

getArticleData('shoulders-of-giants')
