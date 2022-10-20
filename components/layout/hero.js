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
          I like to <span className="font-bold text-orange">build</span>{' '}
          intuitive web apps and{' '}
          <span className="font-bold text-orange">design</span> algorithms. When
          I'm not at my computer, I'm most likely on a walk with{' '}
          <Link href="/julie">
            <a className="underline decoration-orange decoration-2 underline-offset-2 hover:bg-orange hover:text-white">
              Julie
            </a>
          </Link>
          .
        </p>
        {/* icons */}
        <div className="mt-3 flex w-fit border-black">
          {/* icon - more about me */}
          <div className="flex items-center">
            <SaveSvg />
            <Link href="/me">
              <a>
                <span className="ml-2 text-sm text-neutral-400 hover:text-black">
                  More about me
                </span>
              </a>
            </Link>
          </div>
          {/* icon - github */}
          <div className="ml-4 flex items-center p-2">
            <GithubSvg />
            <Link href="https://github.com/hmlinarevic">
              <a className="inline-block" target="_blank">
                <span className="ml-2 text-sm text-neutral-400 hover:text-black">
                  Github
                </span>
              </a>
            </Link>
          </div>
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
