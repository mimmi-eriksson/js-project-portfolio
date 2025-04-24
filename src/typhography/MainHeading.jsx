import styled from "styled-components"
import media from "../styles/media.js"

const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 3.75em;
  font-weight: 700;
  line-height: 100%;

  @media ${media.tablet} {
    font-size: 5em;
    line-height: 125%;
  }
  @media ${media.desktop} {
    font-size: 6.25em;
  }
`

const MainHeading = ({ text }) => {
  return (
    <StyledHeading>{text}</StyledHeading>
  )
}

export default MainHeading