import CardHeading from "../typhography/CardHeading.jsx"
import styled from "styled-components"
import theme from "../styles/theme.js"
import media from "../styles/media.js"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-family: ${theme.fonts.body};

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    line-height: 200%;
    text-align: center;
  }

  @media ${media.desktop} {
    ul {
      font-size: 1.125em;
    }
  }

`

const SkillsCard = ({ skillGroup }) => {
  return (
    <CardWrapper>
      <CardHeading title={skillGroup.title} />
      <ul>
        {skillGroup.skills.map(skill => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </CardWrapper>
  )
}

export default SkillsCard