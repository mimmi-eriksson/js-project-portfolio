import styled from "styled-components"
import theme from "../styles/theme.js"

const StyledTag = styled.li`
  background-color: ${theme.colors.neutral};
  color: ${theme.colors.secondary};
  padding: 2px 6px;
  font-weight: 500;
`

const Tag = ({ tag }) => {
  return <StyledTag>{tag}</StyledTag>
}

export default Tag