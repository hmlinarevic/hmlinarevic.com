import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from './container'

export default function Header() {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle((prevState) => !prevState)
  }

  const handleLink = () => {
    setIsToggle(false)
  }

  const handleClose = () => {
    setIsToggle(false)
  }

  useEffect(() => {
    if (isToggle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isToggle])

  return (
    <header className="relative h-16 bg-black">
      <Container>
        <div className="m-auto flex min-w-[340px] max-w-[720px] h-full items-center">
          <nav className="w-full text-white">
            <div className="flex items-center justify-between">
              <Link href="/">
                <span className="block text-xl font-normal">
                  <span className="text-orange">hrvoje</span> mlinarevic
                </span>
              </Link>
              <button
                className="nav-menu-toggler sm:hidden"
                onClick={handleToggle}
              >
                <div className="nav-menu-toggler-icon" />
              </button>
              {/* nav menu */}
              <div
                className={`nav-menu bg-black ${
                  isToggle ? 'nav-menu--active' : ''
                }`}
              >
                <ul>
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
                </ul>{' '}
                {/* nav menu close button */}
                <button
                  className={`nav-menu-toggler-close-btn ${
                    !isToggle ? 'hidden' : ''
                  }`}
                  onClick={handleClose}
                >
                  <span className="nav-menu-toggler-close" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
}
