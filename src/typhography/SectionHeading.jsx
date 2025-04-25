import styled from "styled-components"
import media from "../styles/media.js"

const StyledHeading = styled.h2`
  font-size: 3.75em;
  font-weight: 700;
  line-height: 110%;
  text-align: center;

  @media ${media.desktop} {
    font-size: 5em;
  }
`

const SectionHeading = ({ title }) => {
  return <StyledHeading>{title}</StyledHeading>
}

export default SectionHeading