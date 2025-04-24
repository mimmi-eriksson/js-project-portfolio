import styled from "styled-components"
import media from "../styles/media.js"

const StyledTag = styled.li`
  background-color: ${({ theme }) => theme.colors.neutral};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 2px 6px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1em;
  font-weight: 500;

  @media ${media.desktop} {
    font-size: 1.125em;
  }
`

const Tag = ({ tag }) => {
  return <StyledTag>{tag}</StyledTag>
}

export default Tag