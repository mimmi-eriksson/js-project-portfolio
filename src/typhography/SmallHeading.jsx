import styled from "styled-components"
import media from "../styles/media.js"

const StyledHeading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.5em;
  font-weight: 500;
  line-height: normal;

  @media ${media.desktop} {
    font-size: 1.875em;
  }
`

const SmallHeading = ({ text }) => {
  return (
    <StyledHeading>{text}</StyledHeading>
  )
}

export default SmallHeading