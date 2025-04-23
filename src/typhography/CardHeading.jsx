import styled from "styled-components"
import theme from "../styles/theme.js"
import media from "../styles/media.js"

const StyledHeading = styled.h3`
  font-size: 1.5em;
  font-weight: 500;

  @media ${media.desktop} {
    font-size: 1.875em;
  }
`

const CardHeading = ({ title }) => {
  return <StyledHeading>{title}</StyledHeading>
}

export default CardHeading