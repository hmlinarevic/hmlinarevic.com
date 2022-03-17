import Image from 'next/image'
import Link from 'next/link'

import SaveSvg from './icons/save-svg'
import GithubSvg from './icons/github-svg'
import HeroIcon from './hero-icon'

import { DOMAIN } from '../utils/url/assets'

export default function Hero({ imgUrl }) {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-5xl font-bold leading-tight mb-5">
          Hey, I'm Hrvoje.
        </h1>

        <p className="w-[340px] font-serif font-normal text-xl leading-relaxed">
          I like to <span className="text-[#619B60] font-bold">build</span>{' '}
          intuitive web apps and{' '}
          <span className="text-[#619B60] font-bold">design</span> algorithms.
          When I'm not at my computer, I'm most likely on a walk with{' '}
          <Link href="/julie">
            <a className="underline decoration-[#619B60] underline-offset-2 hover:bg-[#619B60] hover:text-[#fff]">
              Julie
            </a>
          </Link>
          .
        </p>

        <div className="w-[268px] mt-5 ml-[-0.5rem] flex justify-between">
          <Link href="/me">
            <a>
              <HeroIcon icon={<SaveSvg />} name="More about me" />
            </a>
          </Link>
          <Link href="https://github.com/hmlinarevic">
            <a target="_blank">
              <HeroIcon icon={<GithubSvg />} name="GitHub" />
            </a>
          </Link>
        </div>
      </div>

      <Image
        src={DOMAIN + imgUrl}
        alt="a guy"
        objectFit="cover"
        width={320}
        height={320}
      />
    </div>
  )
}
