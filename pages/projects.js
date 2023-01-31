import Section from '../components/layout/section'
import ProjectDetails from '../components/project/project-details'
import crosswitLogo from '../public/logo/crosswit.png'
import moviesnacksLogo from '../public/logo/moviesnacks.png'

export default function Projects() {
  return (
    <>
      <Section title="Projects">
        <ProjectDetails
          className="mt-4"
          img={{
            src: crosswitLogo,
            alt: 'purple pink line art logo of a human brain',
          }}
          projectName="Crosswit"
          tagline="word search & memory trainer"
          tags={['app', 'game', 'puzzle']}
          descriptions={[
            'Being a hybrid between a memory game and a word search puzzle, crosswit is designed around the idea of improving cognitive functioning',
            'Two aspects of the game - memorizing and searching for words - may improve your short term memory, focus and concentration.',
          ]}
          link={{ href: 'https://www.crosswit.io', name: 'crosswit' }}
        />

        <ProjectDetails
          className="mt-12"
          img={{
            src: moviesnacksLogo,
            alt: 'popcorn and 3d movie glasses logo',
          }}
          projectName="Moviesnacks"
          tagline="discover & search movies"
          tags={['app', 'movie-search']}
          descriptions={[
            'Small demo project where you can search for your favorite movie or discover new - now playing and popular movies',
          ]}
          link={{
            href: 'https://moviesnacks.netlify.app',
            name: 'moviesnacks',
          }}
        />
      </Section>
    </>
  )
}
