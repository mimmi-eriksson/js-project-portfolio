import styled from "styled-components"
import media from "../styles/media.js"

const StyledText = styled.p`
  font-size: 1em;
  font-weight: 400;
  line-height: ${({ $lineHeight }) => $lineHeight === "double" ? "200%" : "normal"};

  @media ${media.desktop} {
    font-size: 1.125em;
  }
`

const BodyText = ({ text, lineHeight }) => {
  return (
    <StyledText $lineHeight={lineHeight} >{text}</StyledText>
  )
}

export default BodyText