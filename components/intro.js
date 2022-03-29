export default function Intro({ title, children }) {
  return (
    <>
      <section className="text-center mb-20 ">
        <h1 className="text-4xl font-bold mb-4">
          {title[0].toUpperCase()}
          {title.slice(1)}
        </h1>

        <p className="text-neutral-500 text-2xl leading-relaxed font-serif">
          {children}
        </p>
      </section>
    </>
  )
}
