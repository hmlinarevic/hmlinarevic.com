import Link from 'next/link'

export default function Header() {
  return (
    <header className="h-16 bg-black">
      <div className="m-auto flex h-full w-[720px] items-center">
        <nav className="w-full text-white">
          <ul className="flex items-center justify-between">
            <Link href="/">
              <a>
                <span className="block text-xl font-normal">
                  <span className="text-orange">hrvoje</span> mlinarevic
                </span>
              </a>
            </Link>
            <div className="flex">
              <li className="mr-10  text-[1rem]">
                <Link href="/me">
                  <a className="cursor-pointer p-2">about me</a>
                </Link>
              </li>
              <li className="mr-10  text-[1rem]">
                <Link href="/blog">
                  <a className="cursor-pointer p-2">articles</a>
                </Link>
              </li>
              <li className=" text-[1rem]">
                <Link href="/projects">
                  <a className="cursor-pointer p-2">projects</a>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}
