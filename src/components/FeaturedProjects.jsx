import Project from "./Project"
import projects from "../data/projects.json"

const FeaturedProjects = () => {
  // show latest project first
  const sortedProjects = projects.projects.sort((a, b) => (b.id - a.id))
  return (
    <section>
      <h2>Featured Projects</h2>
      {sortedProjects.map(project => {
        return (
          <Project
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            tags={project.tags}
            netlify={project.netlify}
            github={project.github} />
        )
      })}
    </section>
  )
}

export default FeaturedProjects