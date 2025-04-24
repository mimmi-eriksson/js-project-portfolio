import SkillsCard from "../components/SkillsCard"
import SectionHeading from "../typhography/SectionHeading"
import styled from "styled-components"
import theme from "../styles/theme.js"
import media from "../styles/media.js"

const SectionWrapper = styled.section`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  padding: ${theme.spacings.large} 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.large};

  @media ${media.desktop} {
    padding: 15.5rem 16.5rem;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${media.desktop} {
    flex-direction: row;
    align-items: stretch;
  }
`

const StyledSkillCard = styled.div`
  padding: ${theme.spacings.medium} 0;
  width: 200px;

  &:not(:last-of-type) {
    border-bottom: 2px solid ${theme.colors.secondary};
  }

  @media ${media.desktop} {
    width: 100%;
    padding: 0 ${theme.spacings.medium};

    &:not(:last-of-type) {
      border-bottom: none;
      border-right: 2px solid ${theme.colors.secondary};
    }
  }
`

const SkillsSection = ({ skills }) => {
  return (
    <SectionWrapper id="skillsSection">
      <SectionHeading title="Skills" />
      <ContentWrapper>
        {skills.map(skillGroup => {
          return (
            <StyledSkillCard key={skillGroup.title}>
              <SkillsCard skillGroup={skillGroup} />
            </StyledSkillCard>
          )
        })}
      </ContentWrapper>
    </SectionWrapper>
  )
}

export default SkillsSection