import { useEffect, useState } from 'react'
import Link from 'next/link'
import Hamburger from './hamburger'

export default function Navigation({ onToggleMenu }) {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle((prevState) => !prevState)
  }

  const handleLink = () => {
    setIsToggle(false)
  }

  useEffect(() => {
    if (isToggle) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = 'auto'
    }
  }, [isToggle])

  return (
    <nav className="h-full flex items-center justify-between">
      <Link href="/">
        <span className="block text-xl text-white font-normal">
          <span className="text-orange">hrvoje</span> mlinarevic
        </span>
      </Link>
      <Hamburger onToggle={handleToggle} className="sm:hidden" />
      <ul
        className={`nav-menu bg-black 
                    ${isToggle ? 'nav-menu--active' : ''}
                `}
        onTransitionEnd={onToggleMenu}
      >
        <li className="mr-10 text-[1rem]" onClick={handleLink}>
          <Link href="/me" className="cursor-pointer p-2">
            about me
          </Link>
        </li>
        <li className="mr-10 text-[1rem]" onClick={handleLink}>
          <Link href="/blog" className="cursor-pointer p-2">
            articles
          </Link>
        </li>
        <li className="text-[1rem]" onClick={handleLink}>
          <Link href="/projects" className="cursor-pointer p-2">
            projects
          </Link>
        </li>
      </ul>
    </nav>
  )
}
