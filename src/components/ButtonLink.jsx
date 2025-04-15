
const ButtonLink = ({ text, link, icon }) => {
  return (
    <a href={link}><img src={icon} alt="" />{text}</a>
  )
}

export default ButtonLink