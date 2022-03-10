export const getSiteData = async () => {
	const response = await fetch('https://strapi.hmlinarevic.com/api/website')
	const { data } = await response.json()

	const { about } = data.attributes

	return {
		about,
	}
}
