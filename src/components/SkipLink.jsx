import styled from "styled-components"
import media from "../styles/media.js"

const StyledLink = styled.a`
  position: absolute;
  top: -50px;
  left: 10px;
  text-decoration: none;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  z-index: 100;
  transition: top 0.3s;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1em;
  font-weight: 500;

  &:focus-visible {
    top: 10px;
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 5px;
    border-radius: 2px;
  }

  @media ${media.desktop} {
    font-size: 1.125em;
  }
`

const SkipLink = () => {
  return (
    <StyledLink href="#introSection">Skip to main content</StyledLink>
  )
}

export default SkipLink