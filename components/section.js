const Section = ({ className, title, children }) => {
  return (
    <section className={className}>
      {title && <h2 className="text-3xl font-bold max-w-[310px]">{title}</h2>}
      {title && <hr className="mt-2 mb-8" />}
      {children}
    </section>
  )
}

export default Section
