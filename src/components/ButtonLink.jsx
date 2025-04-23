import styled from "styled-components"

const StyledButton = styled.a`
  background-color: #F5F5F5;
  color: #333333;
  border-radius: 40px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding-right: 16px;
  text-decoration: none;
`

const ButtonIcon = styled.img`
  height: 32px;
  width: 32px;
  padding: 8px;
`

const ButtonLink = ({ text, link, icon }) => {
  return (
    <StyledButton href={link} target="_blank">
      <ButtonIcon src={icon} alt="" />{text}
    </StyledButton>
  )
}

export default ButtonLink