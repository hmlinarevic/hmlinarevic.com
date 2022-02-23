import Link from 'next/link'
import clsx from 'clsx'

import MyName from './my-name'

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
						<MyName />
					</a>
				</Link>
				<div className="flex">
					<Link href="/me">
						<a>
							<NavItem className="mr-10">about me</NavItem>
						</a>
					</Link>
					<Link href="/articles">
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
