import Header from './header'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="max-w-[720px] mx-auto py-20">{children}</main>
		</>
	)
}

export default Layout
