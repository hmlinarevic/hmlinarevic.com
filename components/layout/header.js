import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from './container'
import ButtonBars from '../buttons/button-bars'

const navMenuOpenStyle = { height: '216px' }

export default function Header() {
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
    <header className="relative h-16 bg-black border-b border-dark">
      <Container className="min-w-[340px] max-w-[720px]">
        <nav className="h-full flex items-center justify-between">
          <Link href="/">
            <span className="block text-xl text-white font-normal sm:top">
              <span className="text-orange">hrvoje</span> mlinarevic
            </span>
          </Link>
          <ButtonBars onToggle={handleToggle} />
          <ul
            className={`bg-black sm:flex text-white absolute flex-col sm:flex-row top-16
            right-0 h-0 overflow-hidden w-screen z-20 transition-all`}
            style={isToggle ? navMenuOpenStyle : null}
          >
            <li
              className="mr-10 text-[1rem] underline mt-8 sm:mt-0 sm:ml-4 sm:no-underline"
              onClick={handleLink}
            >
              <Link href="/me" className="cursor-pointer p-2">
                about me
              </Link>
            </li>
            <li
              className="mr-10 text-[1rem] underline mt-8 sm:mt-0 sm:ml-4 sm:no-underline"
              onClick={handleLink}
            >
              <Link href="/blog" className="cursor-pointer p-2">
                articles
              </Link>
            </li>
            <li
              className="text-[1rem] underline mt-8 sm:mt-0 sm:ml-4 sm:no-underline"
              onClick={handleLink}
            >
              <Link href="/projects" className="cursor-pointer p-2">
                projects
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
