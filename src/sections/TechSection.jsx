import SectionHeading from "../typhography/SectionHeading"

const TechSection = (tech) => {
  return (
    <section id="techSection">
      <SectionHeading title="Tech" />
      <h3>{tech.tech.join(", ")}</h3>
    </section>
  )
}

export default TechSection