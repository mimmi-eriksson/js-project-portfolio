const ButtonSocial = ({ link, icon, text }) => {
  return (
    <a href={link} target="_blank"><img src={icon} alt={text} /></a>
  )
}

export default ButtonSocial