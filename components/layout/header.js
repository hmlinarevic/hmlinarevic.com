import Container from './container'
import Navigation from '../navigation'

export default function Header() {
    return (
        <header className="relative h-16 bg-black">
            <Container className="min-w-[340px] max-w-[720px]">
                <Navigation />
            </Container>
        </header>
    )
}
