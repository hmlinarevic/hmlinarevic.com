import { useState } from 'react'

import HexagonSvg from './icons/hexagon-svg'

export default function ProjectLink({ url, label }) {
  const [isUserHovering, setIsUserHovering] = useState(false)

  const handleUserHovering = () => {
    setIsUserHovering((prevState) => !prevState)
  }

  return (
    <a
      onMouseEnter={handleUserHovering}
      onMouseLeave={handleUserHovering}
      href={url}
      target="_blank"
      className="block"
    >
      <div className="ml-[-20px] flex w-[calc(100%+40px)] cursor-pointer items-center justify-between rounded-xl py-[10px] px-[20px] transition hover:bg-orange hover:text-white">
        <div className="flex items-center">
          <span className={isUserHovering ? 'animate-spin-slow' : ''}>
            <HexagonSvg />
          </span>
          <span className="ml-2 inline text-lg">{label}</span>
        </div>
      </div>
    </a>
  )
}
