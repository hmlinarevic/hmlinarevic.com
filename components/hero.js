import Image from 'next/image'
import Link from 'next/link'

import SaveSvg from '../icons/save-svg'
import GithubSvg from '../icons/github-svg'

import { DOMAIN } from '../../utils/url/assets'

export default function Hero({ imgUrl }) {
  return (
    <div className="flex justify-between">
      <div>
        {/* heading */}
        <h1 className="mb-5 text-5xl font-bold leading-tight">
          Hey, I'm Hrvoje.
        </h1>
        {/* subheading */}
        <p className="w-[320px] text-xl font-normal leading-relaxed">
          I like to <span className="text-orange font-bold">build</span>{' '}
          intuitive web apps and{' '}
          <span className="text-orange font-bold">design</span> algorithms. When
          I'm not at my computer, I'm most likely on a walk with{' '}
          <Link href="/julie">
            <a className="decoration-orange hover:bg-orange underline decoration-2 underline-offset-2 hover:text-white">
              Julie
            </a>
          </Link>
          .
        </p>
        {/* icons */}
        <div className="mt-5 ml-[-0.5rem] flex w-[268px] justify-between">
          {/* icon - more about me */}
          <Link href="/me">
            <a>
              <div className="flex p-2">
                <SaveSvg />
                <span className="ml-2 text-neutral-400 hover:text-black">
                  More about me
                </span>
              </div>
            </a>
          </Link>
          {/* icon - github */}
          <Link href="https://github.com/hmlinarevic">
            <a target="_blank">
              <div className="flex p-2">
                <GithubSvg />
                <span className="ml-2 text-neutral-400 hover:text-black">
                  Github
                </span>
              </div>
            </a>
          </Link>
        </div>
      </div>

      <Image
        src={DOMAIN + imgUrl}
        alt="me outside in the park posterised in orange tones"
        objectFit="cover"
        width={300}
        height={340}
      />
    </div>
  )
}
