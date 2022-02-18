import Navigation from './navigation'

const Header = () => {
  return (
    <header className="h-16 bg-neutral-100 border-b">
      <div className="w-[720px] h-full m-auto flex items-center">
        <Navigation />
      </div>
    </header>
  )
}

export default Header
