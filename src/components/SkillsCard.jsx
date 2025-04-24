import BodyText from "../typhography/BodyText.jsx"
import CardHeading from "../typhography/CardHeading.jsx"
import styled from "styled-components"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`
const SkillsWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const SkillsCard = ({ skillGroup }) => {
  return (
    <CardWrapper>
      <CardHeading title={skillGroup.title} />
      <SkillsWrapper>
        {skillGroup.skills.map(skill => {
          return (
            <li key={skill}>
              <BodyText lineHeight="double" text={skill} />
            </li>
          )
        })}
      </SkillsWrapper>
    </CardWrapper>
  )
}

export default SkillsCard