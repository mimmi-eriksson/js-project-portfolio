
const ButtonLink = ({ text, link, icon }) => {
  return (
    <a href={link} target="_blank"><img src={icon} alt="" />{text}</a>
  )
}

export default ButtonLink