import ButtonLink from "./ButtonLink.jsx"
import Tag from "./Tag.jsx"
import CardHeading from "../typhography/CardHeading.jsx"
import "./ProjectCard.css"

const ProjectCard = ({ project }) => {
  return (
    <article>
      <img src={project.image} alt={project.altText} />
      <div>
        <CardHeading title={project.name} />
        <p>{project.description}</p>
        <div>
          <ul>
            {project.tags.map(tag => {
              return <Tag key={tag} tag={tag} />
            })}
          </ul>
        </div>
        <div>
          <ButtonLink text="Live demo" link={project.netlify} icon="../assets/globe-icon.svg" />
          <ButtonLink text="View the code" link={project.github} icon="../assets/github-icon.svg" />
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
