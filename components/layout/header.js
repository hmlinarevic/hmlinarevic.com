import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Container from './container'
import ButtonBars from '../button-bars.js'

export default function Header() {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle((prevState) => !prevState)
  }

  const handleLink = () => {
    setIsToggle(false)
  }

  const handleResize = useCallback(() => {
    const bodyWidth = document.body.clientWidth

    if (bodyWidth >= 640 && isToggle) {
      setIsToggle(false)
    }
  }, [isToggle])

  useEffect(() => {
    if (isToggle) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = 'auto'
    }
  }, [isToggle])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <header className="relative h-16 bg-black border-b border-dark">
      <Container className="min-w-[340px] max-w-[720px]">
        <nav className="h-full flex items-center justify-between">
          <Link href="/">
            <span className="block text-xl text-white font-normal sm:top">
              <span className="text-orange">hrvoje</span> mlinarevic
            </span>
          </Link>
          <ButtonBars isToggle={isToggle} onToggle={handleToggle} />
          <ul
            className={`bg-black flex text-white absolute flex-col top-16 right-0 h-0 overflow-hidden
            w-screen z-20 transition-all sm:static sm:w-auto sm:h-auto sm:flex-row`}
            style={isToggle ? { height: '216px' } : null}
          >
            <li
              className="ml-4 mt-8 text-[1rem] underline sm:mt-0 sm:mr-10 sm:no-underline"
              onClick={handleLink}
            >
              <Link href="/me" className="sm:p-2">
                about me
              </Link>
            </li>
            <li
              className="ml-4 mt-8 text-[1rem] underline sm:mt-0 sm:mr-10 sm:no-underline"
              onClick={handleLink}
            >
              <Link href="/blog" className="sm:p-2">
                articles
              </Link>
            </li>
            <li
              className="ml-4 mt-8 text-[1rem] underline sm:mt-0 sm:no-underline"
              onClick={handleLink}
            >
              <Link href="/projects" className="sm:p-2">
                projects
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
