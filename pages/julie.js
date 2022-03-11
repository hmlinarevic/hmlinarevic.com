import Image from 'next/image'
import Text from '../components/text'
import { getJuliesData } from '../lib/cms/julie'
import { DOMAIN } from '../utils/url/assets'

export default function Julie({ intros, photoUrls }) {
  console.log(intros)
  console.log(photoUrls)
  return (
    <>
      <h1>Julie</h1>
      {/* <div className="grid"> */}
      <div className="w-[200px] h-[300px] border ">
        <Image
          src={DOMAIN + photoUrls[1]}
          width={300}
          height={500}
          objectFit="cover"
        />
      </div>
      <Text data={intros[0]} />
      {/* </div> */}
    </>
  )
}

export async function getStaticProps() {
  const { intros, photoUrls } = await getJuliesData()

  return {
    props: {
      intros,
      photoUrls,
    },
  }
}
