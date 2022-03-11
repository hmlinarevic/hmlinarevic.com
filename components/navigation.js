import Link from 'next/link'

import clsx from 'clsx'

const NavItem = ({ className, children }) => {
	const styles =
		'text-[1rem] p-2 hover:bg-neutral-200 rounded-lg transition cursor-pointer'
	return <li className={clsx(className, styles)}>{children}</li>
}

const Navigation = () => {
	return (
		<nav className="w-full">
			<ul className="flex justify-between items-center">
				<Link href="/">
					<a>
						<span className="block text-xl font-normal">
							<span className="text-[#619B60]">hrvoje</span> mlinarevic
						</span>
					</a>
				</Link>
				<div className="flex">
					<Link href="/me">
						<a>
							<NavItem className="mr-10">about me</NavItem>
						</a>
					</Link>
					<Link href="/blog">
						<a>
							<NavItem className="mr-10">articles</NavItem>
						</a>
					</Link>
					<Link href="/reading">
						<a>
							<NavItem>reading</NavItem>
						</a>
					</Link>
				</div>
			</ul>
		</nav>
	)
}

export default Navigation
