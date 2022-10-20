import Section from '../components/layout/section'

const Tag = ({ children }) => {
  return (
    <span className="mr-2 rounded-3xl bg-night bg-opacity-20 py-1 px-4 text-sm text-night">
      {children}
    </span>
  )
}

export default function Projects() {
  return (
    <>
      <Section title="Projects">
        <p className="text-lg">
          <span className="font-bold">Crosswit</span> - word search & memory
          trainer.
        </p>
        {/* tags */}
        <div className="mt-2">
          <Tag>game</Tag>
          <Tag>puzzle</Tag>
        </div>
        <p className="mt-6 text-lg">
          Being a hybrid between a memory game and a word search puzzle,
          crosswit is designed around the idea of improving cognitive
          functioning.
        </p>
        <p className="mt-6 text-lg">
          Two aspects of the game - memorizing and searching for words - may
          improve your <br /> short term memory, focus and concentration.
        </p>
        <p className="mt-6 text-lg">
          Try it out,{' '}
          <a
            className="underline decoration-orange decoration-2 underline-offset-2 hover:bg-orange hover:text-white hover:no-underline"
            href="https://www.crosswit.io"
            target="_blank"
          >
            crosswit.io
          </a>
          .
        </p>
      </Section>
    </>
  )
}
