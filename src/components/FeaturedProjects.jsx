import Project from "./Project"
import projects from "../data/projects.json"

const FeaturedProjects = () => {
  return (
    <section>
      <h2>Featured Projects</h2>
      {projects.projects.map(project => {
        return (
          <Project
            key={project.name}
            name={project.name}
            image={project.image}
            text={project.text}
            tags={project.tags}
            netlify={project.netlify}
            github={project.github} />
        )
      })}
    </section>
  )
}

export default FeaturedProjects