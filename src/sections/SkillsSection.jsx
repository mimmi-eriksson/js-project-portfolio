import SkillsCard from "../components/SkillsCard"
import SectionHeading from "../typhography/SectionHeading"

const SkillsSection = ({ skills }) => {
  return (
    <section id="skillsSection">
      <div>
        <SectionHeading title="Skills" />
        <div>
          {skills.map(skillGroup => {
            return (
              <SkillsCard key={skillGroup.title} skillGroup={skillGroup} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection