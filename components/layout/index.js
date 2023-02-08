import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main className="mx-auto min-w-[340px] max-w-[752px] py-10 sm:py-20 px-4">
        {children}
      </main>
    </>
  )
}
