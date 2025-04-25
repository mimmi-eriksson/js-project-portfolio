import FadeInSection from "./FadeInSection"
import SectionHeading from "../typhography/SectionHeading"
import SmallHeading from "../typhography/SmallHeading"
import ArrowLink from "../components/ArrowLink"
import styled from "styled-components"
import media from "../styles/media.js"

const SectionWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding-inline: ${({ theme }) => theme.spacings.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;

  @media ${media.tablet} {
    padding-inline: 2rem;
    gap: ${({ theme }) => theme.spacings.large};
    text-align: center;
  }
  @media ${media.desktop} {
    padding-inline: 10rem;
    flex-direction: row;
    gap: 7.75rem;
    text-align: left;
  }
  @media ${media.desktopXL} {
    padding-inline: 17rem;
  }
`

const TechSection = (tech) => {
  return (
    <FadeInSection name="techSection">
      <SectionWrapper>
        <ContentWrapper>
          <SectionHeading title="Tech" />
          <SmallHeading text={tech.tech.join(", ")} />
        </ContentWrapper>
        {/* <ArrowLink mode="dark" link={"#projectsSection"} /> */}
      </SectionWrapper>
    </FadeInSection>
  )
}

export default TechSection