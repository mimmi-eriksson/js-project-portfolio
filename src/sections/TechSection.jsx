import SectionHeading from "../typhography/SectionHeading"
import SmallHeading from "../typhography/SmallHeading.jsx"
import styled from "styled-components"
import media from "../styles/media.js"

const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacings.xLarge} ${({ theme }) => theme.spacings.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;

  @media ${media.tablet} {
    padding: 17rem 2rem;
    gap: ${({ theme }) => theme.spacings.large};
    text-align: center;
  }
  @media ${media.desktop} {
    padding: 26.4rem 17rem;
    flex-direction: row;
    gap: 7.75rem;
    text-align: left;
  }
`

const TechSection = (tech) => {
  return (
    <SectionWrapper id="techSection">
      <SectionHeading title="Tech" />
      <SmallHeading text={tech.tech.join(", ")} />
    </SectionWrapper>
  )
}

export default TechSection