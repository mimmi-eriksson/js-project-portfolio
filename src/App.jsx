import Header from "./sections/Header"
import IntroSection from "./sections/IntroSection"
import TechSection from "./sections/TechSection"
import ProjectsSection from "./sections/ProjectsSection"
import SkillsSection from "./sections/SkillsSection"
import ArticlesSection from "./sections/ArticlesSection"
import ContactSection from "./sections/ContactSection"
import Footer from "./sections/Footer"

import tech from "./data/tech.json"
import projects from "./data/projects.json"
import skills from "./data/skills.json"
import articles from "./data/articles.json"

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <IntroSection />
      <TechSection tech={tech.tech} />
      <ProjectsSection
        projects={projects.projects}
      />
      <SkillsSection skills={skills.skills} />
      <ArticlesSection articles={articles.articles} />
      <ContactSection />
      {/* <Footer /> */}
    </>
  )
}

export default App
