import IntroSection from "./sections/IntroSection"
import TechSection from "./sections/TechSection"
import ProjectsSection from "./sections/ProjectsSection"
import ContactSection from "./sections/ContactSection"

import tech from "./data/tech.json"
import projects from "./data/projects.json"

const App = () => {
  return (
    <>
      <IntroSection />
      <TechSection tech={tech.tech} />
      <ProjectsSection
        projects={projects.projects}
      />
      <ContactSection />
    </>
  )
}

export default App
