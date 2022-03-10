export const getMyData = async () => {
	const response = await fetch(
		'https://strapi.hmlinarevic.com/api/me?populate=*'
	)
	const { data } = await response.json()

	const { about, picture } = data.attributes
	const { url: imgUrl } = picture.data.attributes

	return {
		about,
		imgUrl,
	}
}
