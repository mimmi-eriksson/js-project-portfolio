import CardHeading from "../typhography/CardHeading.jsx"

const SkillsCard = ({ skillGroup }) => {
  return (
    <div>
      <CardHeading title={skillGroup.title} />
      <ul>
        {skillGroup.skills.map(skill => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </div>
  )
}

export default SkillsCard