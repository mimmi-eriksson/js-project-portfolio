import styled from "styled-components"

const ButtonIcon = styled.img`
  width: 32px;
  height: 32px;
`

const ButtonSocial = ({ link, icon, text }) => {
  return (
    <li>
      <a href={link} target="_blank">
        <ButtonIcon src={icon} alt={text} />
      </a>
    </li>
  )
}

export default ButtonSocial