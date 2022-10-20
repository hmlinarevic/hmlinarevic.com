export default function Section({ title, children }) {
  return (
    <section className="mb-16">
      {title && <h2 className="max-w-[310px] text-3xl font-bold">{title}</h2>}
      {title && <hr className="mt-2 mb-4 border-black border-opacity-20" />}
      {children}
    </section>
  )
}
