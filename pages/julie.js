import Image from 'next/legacy/image'

import { getJuliesData } from '../lib/cms/julie'

import { DOMAIN } from '../utils/url/assets'

export default function Julie({ photos }) {
  const juliesPhotos = photos.map((photo) => DOMAIN + photo.attributes.url)

  return (
    <section>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-10">
        <div className="relative h-[280px] w-[280px] justify-self-end">
          <Image
            className="rounded-sm"
            alt="white labrador dog on the lovely cut grass with nice flowers"
            src={juliesPhotos[0]}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="self-center">
          <h2 className="mb-2 text-4xl font-bold">Julie</h2>
          <p className="text-xl">
            the best dog in the world, <br />
            loves to drive around, <br />
            and sleep on her couch.
          </p>
        </div>

        <div className="self-end">
          <Image
            className="rounded-sm"
            alt="white labrador dog sleeping on the couch"
            src={juliesPhotos[2]}
            width={300}
            height={220}
            objectFit="cover"
          />
        </div>

        <div className="mb-8 inline-block h-[220px] w-[300px]">
          <Image
            className="rounded-sm"
            alt="white labrador dog in the car seat"
            src={juliesPhotos[1]}
            width={300}
            height={220}
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  const { photos } = await getJuliesData()

  return {
    props: {
      photos,
    },
  }
}
