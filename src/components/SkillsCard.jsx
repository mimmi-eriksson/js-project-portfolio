const SkillsCard = ({ skillGroup }) => {
  return (
    <div>
      <h3>{skillGroup.title}</h3>
      <ul>
        {skillGroup.skills.map(skill => {
          return <li>{skill}</li>
        })}
      </ul>
    </div>
  )
}

export default SkillsCard