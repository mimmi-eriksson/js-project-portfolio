import ProjectCard from "../components/ProjectCard"
import SectionHeading from "../typhography/SectionHeading"
import styled from "styled-components"
import media from "../styles/media.js"

const SectionWrapper = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacings.xLarge} ${({ theme }) => theme.spacings.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${media.tablet} {
    padding-inline: 2rem;
  }
`

const ContentWrapper = styled.div`
  max-width: 958px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacings.large};
  
  @media ${media.desktopXL} {
    gap: ${({ theme }) => theme.spacings.xLarge};
  }
`

const ProjectsSection = ({ projects }) => {
  // show latest project first
  const sortedProjects = projects.sort((a, b) => (b.id - a.id))
  return (
    <section id="projectsSection">
      <SectionWrapper>
        <ContentWrapper>
          <SectionHeading title="Featured Projects" />
          {sortedProjects.map(project => {
            return (
              <ProjectCard
                key={project.id}
                project={project} />
            )
          })}
        </ContentWrapper>
      </SectionWrapper>
    </section>
  )
}

export default ProjectsSection