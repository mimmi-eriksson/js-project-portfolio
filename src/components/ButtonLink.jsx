import styled from "styled-components"
import theme from "../styles/theme.js"
import media from "../styles/media.js"

const StyledButton = styled.a`
  background-color: ${theme.colors.ternary};
  color: ${theme.colors.neutral};
  border-radius: 40px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding-right: 16px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  }

  &:hover img {
    filter: invert(1);
  }

  @media ${media.desktop} {
    font-size: 18px;
  }
`

const ButtonIcon = styled.img`
  height: 32px;
  width: 32px;
  margin: 8px;
`

const ButtonLink = ({ text, link, icon }) => {
  return (
    <StyledButton href={link} target="_blank">
      <ButtonIcon src={icon} alt="" />{text}
    </StyledButton>
  )
}

export default ButtonLink