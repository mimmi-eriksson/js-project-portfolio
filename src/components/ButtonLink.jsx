import styled from "styled-components"
import media from "../styles/media.js"

const StyledButton = styled.a`
  background-color: ${({ theme }) => theme.colors.ternary};
  color: ${({ theme }) => theme.colors.neutral};
  border-radius: 40px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding-right: 16px;
  font-size: 1em;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover>img {
    filter: invert(1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 5px;
  }

  @media ${media.desktop} {
    font-size: 1.125em;
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