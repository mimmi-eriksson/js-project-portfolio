import styled from "styled-components"

const Link = styled.a`
  &:focus-visible {
    outline: 2px solid;
    outline-offset: 5px;
    border-radius: 2px;
  }
`

const ButtonIcon = styled.img`
  width: 32px;
  height: 32px;

  &:hover {
    filter: invert(0.3)
  }

  &:focus-visible {
    outline: 2px solid;
    outline-offset: 5px;
    border-radius: 2px;
  }
`

const ButtonSocial = ({ link, icon, text }) => {
  return (
    <li>
      <Link href={link} target="_blank">
        <ButtonIcon src={icon} alt={text} />
      </Link>
    </li>
  )
}

export default ButtonSocial