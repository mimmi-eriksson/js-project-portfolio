import SectionHeading from "../typhography/SectionHeading"
import styled from "styled-components"
import theme from "../styles/theme.js"
import media from "../styles/media.js"

const SectionWrapper = styled.section`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  padding: ${theme.spacings.xLarge} ${theme.spacings.small};
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  
  h3 {
    font-family: ${theme.fonts.body};
    font-size: 1.5em;
    font-weight: 500;
  }

  @media ${media.tablet} {
    padding: 17rem 2rem;
    gap: ${theme.spacings.large};
    text-align: center;
  }
  @media ${media.desktop} {
    padding: 26.4rem 17rem;
    flex-direction: row;
    gap: 7.75rem;
    text-align: left;

    h3 {
      font-size: 1.875;
    }
  }
`

const TechSection = (tech) => {
  return (
    <SectionWrapper id="techSection">
      <SectionHeading title="Tech" />
      <h3>{tech.tech.join(", ")}</h3>
    </SectionWrapper>
  )
}

export default TechSection