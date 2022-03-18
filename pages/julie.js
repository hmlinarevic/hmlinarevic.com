import Image from 'next/image'

import Text from '../components/text'
import Intro from '../components/intro'

import { getJuliesData } from '../lib/cms/julie'
import { DOMAIN } from '../utils/url/assets'

export default function Julie({ intros, photos }) {
  const juliesPhotos = photos.map((photo) => DOMAIN + photo.attributes.url)

  return (
    <>
      <Intro title="julie">The best dog on the planet</Intro>

      <div className="bg-neutral-100 border-r-2 rounded-xl pr-10 shadow-xl flex justify-between items-center">
        <Image
          className="rounded-l-xl"
          src={juliesPhotos[0]}
          width={300}
          height={300}
          objectFit="cover"
        />

        <Text className="basis-80 text-lg leading-relaxed" data={intros[0]} />
      </div>

      <div className="bg-neutral-100 border-l-2 rounded-xl pl-10 my-12 shadow-xl flex justify-between items-center">
        <Text className="basis-80 text-lg leading-relaxed" data={intros[1]} />
        <Image
          className="rounded-r-xl"
          src={juliesPhotos[1]}
          width={300}
          height={220}
          objectFit="cover"
        />
      </div>

      <div className="bg-neutral-100  border-r-2 rounded-xl pr-10 shadow-xl flex justify-between items-center">
        <Image
          className="rounded-l-xl"
          src={juliesPhotos[2]}
          width={300}
          height={220}
          objectFit="cover"
        />
        <Text className="basis-80 text-lg leading-relaxed" data={intros[2]} />
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
