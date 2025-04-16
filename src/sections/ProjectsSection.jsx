import ProjectCard from "../components/ProjectCard"

const ProjectsSection = ({ projects }) => {
  // show latest project first
  const sortedProjects = projects.sort((a, b) => (b.id - a.id))
  return (
    <section>
      <h2>Featured Projects</h2>
      {sortedProjects.map(project => {
        return (
          <ProjectCard
            key={project.id}
            project={project} />
        )
      })}
    </section>
  )
}

export default ProjectsSection