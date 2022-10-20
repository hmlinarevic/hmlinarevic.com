import Header from './header'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[720px] py-20">{children}</main>
    </>
  )
}
