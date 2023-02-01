import { useState } from 'react'
import BoxSvg from './icons/box-svg'

export default function ProjectLink({ url, label }) {
  const [isUserHovering, setIsUserHovering] = useState(false)

  const handleHover = () => {
    setIsUserHovering((prevState) => !prevState)
  }

  return (
    <a
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      href={url}
      target="_blank"
      className="block"
      rel="noreferrer"
    >
      <div className="ml-[-20px] flex w-[calc(100%+40px)] cursor-pointer items-center justify-between rounded-xl py-[10px] px-[20px] transition hover:bg-orange hover:text-white">
        <div className="flex items-center">
          <span className={isUserHovering ? 'animate-spin-slow' : ''}>
            <BoxSvg
              className={`${isUserHovering ? 'text-white' : 'text-orange'}`}
            />
          </span>
          <span className="ml-3 inline text-lg ">
            {label.short}
            <span> - {label.long}</span>
          </span>
        </div>
      </div>
    </a>
  )
}
