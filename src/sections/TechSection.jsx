const TechSection = (tech) => {
  return (
    <section id="techSection">
      <h2>Tech</h2>
      <h3>{tech.tech.join(", ")}</h3>
    </section>
  )
}

export default TechSection