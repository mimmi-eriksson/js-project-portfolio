import ProjectsSection from "./sections/ProjectsSection"
import projects from "./data/projects.json"

export const App = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <ProjectsSection
        projects={projects.projects}
      />
    </>
  )
}
