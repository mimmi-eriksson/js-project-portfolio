import SkipLink from "./components/SkipLink"
import Header from "./sections/Header"
import IntroSection from "./sections/IntroSection"
import TechSection from "./sections/TechSection"
import ProjectsSection from "./sections/ProjectsSection"
import SkillsSection from "./sections/SkillsSection"
import ArticlesSection from "./sections/ArticlesSection"
import ContactSection from "./sections/ContactSection"

import tech from "./data/tech.json"
import projects from "./data/projects.json"
import skills from "./data/skills.json"
import articles from "./data/articles.json"

import GlobalStyle from "./styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme.js"

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SkipLink />
        <Header />
        <IntroSection />
        <TechSection tech={tech.tech} />
        <ProjectsSection
          projects={projects.projects}
        />
        <SkillsSection skills={skills.skills} />
        <ContactSection />
      </ThemeProvider>
    </>
  )
}

export default App
