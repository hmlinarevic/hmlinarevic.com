import Image from 'next/image'
import Link from 'next/link'
import SaveSvg from '../icons/save-svg'
import GithubSvg from '../icons/github-svg'
import { getAPIAssetEndpoint } from '../../utils/getAPIAssetEndpoint'

export default function Hero({ imgUrl }) {
  return (
    <div className="hero sm:grid sm:grid-cols-[auto_1fr] sm:grid-rows-[repeat(5,40px)] sm:gap-y-8 sm:gap-x-12 m">
      {/* heading */}
      <h1 className="text-4xl mb-5 font-bold leading-tight md:text-5xl sm:row-span-1 sm:mb-0">
        Hey, I'm Hrvoje.
      </h1>
      {/* Image */}
      <div
        className="w-full h-[300px] border-2 relative sm:w-auto sm:h-auto sm:col-start-2 sm:col-end-[-1] sm:row-start-1
                           sm:row-end-[-1]"
      >
        <Image
          src={getAPIAssetEndpoint(imgUrl)}
          alt="me outside in the park posterised in orange tones"
          fill
          style={{
            objectFit: 'cover',
            borderRadius: '4px',
          }}
        />
      </div>
      <div>
        {/* subheading */}
        <p className="sm:w-[320px] text-lg md:text-xl font-normal leading-relaxed">
          I like to <span className="font-bold text-orange">build</span>{' '}
          intuitive web apps and{' '}
          <span className="font-bold text-orange">design</span> algorithms. When
          I'm not at my computer, I'm most likely on a walk with{' '}
          <Link
            href="/julie"
            className="underline decoration-orange decoration-2 underline-offset-2 hover:bg-orange hover:text-white"
          >
            Julie
          </Link>
          .
        </p>
        {/* icons & links */}
        <div className="mt-3 flex w-fit">
          {/* icon - more about me */}
          <div className="flex items-center">
            <SaveSvg />
            <Link href="/me">
              <span className="ml-2 text-sm text-neutral-400 hover:text-black">
                More about me
              </span>
            </Link>
          </div>
          {/* icon - github */}
          <div className="ml-4 flex items-center p-2">
            <GithubSvg />
            <Link
              href="https://github.com/hmlinarevic"
              className="inline-block"
              target="_blank"
            >
              <span className="ml-2 text-sm text-neutral-400 hover:text-black">
                Github
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
