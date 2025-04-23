import ProjectCard from "../components/ProjectCard"
import SectionHeading from "../typhography/SectionHeading"
import styled from "styled-components"
import theme from "../styles/theme.js"
import media from "../styles/media.js"

const ProjectsWrapper = styled.div`
  margin: ${theme.spacings.xLarge} ${theme.spacings.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacings.large};

  @media ${media.tablet} {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media ${media.desktop} {
    margin-left: 17rem;
    margin-right: 17rem;
    gap: ${theme.spacings.xLarge};
  }
`

const ProjectsSection = ({ projects }) => {
  // show latest project first
  const sortedProjects = projects.sort((a, b) => (b.id - a.id))
  return (
    <section id="projectsSection">
      <ProjectsWrapper>
        <SectionHeading title="Featured Projects" />
        {sortedProjects.map(project => {
          return (
            <ProjectCard
              key={project.id}
              project={project} />
          )
        })}
      </ProjectsWrapper>
    </section>
  )
}

export default ProjectsSection