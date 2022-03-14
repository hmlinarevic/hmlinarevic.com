import Image from 'next/image'

import Text from '../components/text'

import { getJuliesData } from '../lib/cms/julie'
import { DOMAIN } from '../utils/url/assets'

export default function Julie({ intros, photos }) {
  const juliesPhotos = photos.map((photo) => {
    return DOMAIN + photo.attributes.url
  })

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-20">Julie</h1>

      <div className="grid grid-cols-2 gap-x-10 mb-10 items-center border pr-10 rounded-2xl bg-neutral-50 shadow">
        <Image
          className="rounded-l-2xl"
          src={juliesPhotos[0]}
          width={400}
          height={400}
          objectFit="cover"
          objectPosition="50% 50%"
        />

        <Text
          className=" text-lg basis-80 font-light leading-relaxed"
          data={intros[0]}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-10 mb-10 items-center border rounded-2xl pl-10 bg-neutral-50 shadow">
        <Text
          className="text-lg font-light leading-relaxed "
          data={intros[1]}
        />
        <Image
          className="rounded-r-2xl"
          src={juliesPhotos[1]}
          width={400}
          height={300}
          objectFit="cover"
        />
      </div>

      <div className="grid grid-cols-2 gap-x-10 mb-10 items-center border rounded-2xl bg-neutral-50 shadow">
        <Image
          className="rounded-l-2xl"
          src={juliesPhotos[2]}
          width={400}
          height={300}
          objectFit="cover"
        />
        <Text
          className="text-lg font-light leading-relaxed "
          data={intros[2]}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { intros, photos } = await getJuliesData()

  return {
    props: {
      intros,
      photos,
    },
  }
}
