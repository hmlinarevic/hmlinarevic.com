import Container from './container'
import Navigation from '../navigation'

export default function Header() {
  return (
    <header className="relative h-16 bg-black border-b border-dark">
      <Container className="min-w-[340px] max-w-[720px]">
        <Navigation />
      </Container>
    </header>
  )
}
