import ProjectCard from "../components/ProjectCard"
import SectionHeading from "../typhography/SectionHeading"
import styled from "styled-components"
import media from "../styles/media.js"

const ProjectsWrapper = styled.div`
  margin: ${({ theme }) => theme.spacings.xLarge} ${({ theme }) => theme.spacings.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacings.large};

  @media ${media.tablet} {
    margin-inline: 2rem;
  }

  @media ${media.desktop} {
    margin-inline: 17rem;
    gap: ${({ theme }) => theme.spacings.xLarge};
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