import FadeInSection from "./FadeInSection"
import SkillsCard from "../components/SkillsCard"
import SectionHeading from "../typhography/SectionHeading"
import styled from "styled-components"
import media from "../styles/media.js"

const SectionWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacings.large} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.large};

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
  padding: ${({ theme }) => theme.spacings.medium} 0;
  width: 200px;

  &:not(:last-of-type) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  }

  @media ${media.desktop} {
    width: 100%;
    padding: 0 ${({ theme }) => theme.spacings.medium};

    &:not(:last-of-type) {
      border-bottom: none;
      border-right: 2px solid ${({ theme }) => theme.colors.secondary};
    }
  }
`

const SkillsSection = ({ skills }) => {
  return (
    <FadeInSection name="skillsSection">
      <SectionWrapper>
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
    </FadeInSection>
  )
}

export default SkillsSection