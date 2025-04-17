import ProjectCard from "../components/ProjectCard"
import SectionHeading from "../typhography/SectionHeading"

const ProjectsSection = ({ projects }) => {
  // show latest project first
  const sortedProjects = projects.sort((a, b) => (b.id - a.id))
  return (
    <section id="projectsSection">
      <SectionHeading title="Featured Projects" />
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