import ButtonLink from "./ButtonLink.jsx"

const Project = ({ id, name, image, description, tags, netlify, github }) => {
  return (
    <article>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <ul>
            {tags.map(tag => {
              return <li>{tag}</li>
            })}
          </ul>
        </div>
        <div>
          <ButtonLink text="Live demo" link={netlify} icon="../assets/globe-icon.png" />
          <ButtonLink text="View the code" link={github} icon="../assets/github-icon.png" />
        </div>
      </div>
    </article>
  )
}

export default Project
