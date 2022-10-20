export default function Header() {
  return (
    <header className="h-16 border-b bg-neutral-100">
      <div className="m-auto flex h-full w-[720px] items-center">
        <nav className="w-full">
          <ul className="flex items-center justify-between">
            <Link href="/">
              <a>
                <span className="block text-xl font-normal">
                  <span className="text-[#619B60]">hrvoje</span> mlinarevic
                </span>
              </a>
            </Link>
            <div className="flex">
              <li className="mr-10 cursor-pointer rounded-lg p-2 text-[1rem] transition hover:bg-neutral-200">
                <Link href="/me">
                  <a>about me</a>
                </Link>
              </li>
              <li className="mr-10 cursor-pointer rounded-lg p-2 text-[1rem] transition hover:bg-neutral-200">
                <Link href="/blog">
                  <a>articles</a>
                </Link>
              </li>
              <li className="mr-10 cursor-pointer rounded-lg p-2 text-[1rem] transition hover:bg-neutral-200">
                <Link href="/projects">
                  <a>projects</a>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}
