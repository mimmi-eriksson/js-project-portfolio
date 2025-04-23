import ButtonLink from "./ButtonLink.jsx"
import Tag from "./Tag.jsx"
import CardHeading from "../typhography/CardHeading.jsx"
import styled from "styled-components"
import theme from "../styles/theme.js"
import media from "../styles/media.js"

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.medium};
  font-family: ${theme.fonts.body};
  font-size: 16px;
  font-weight: 400;

  @media ${media.tablet} {
    flex-direction: row;
    gap: 37px;
  }

  @media ${media.desktop} {
    gap: 16px;
    font-size: 18px;
  }
`

const CardImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;

  @media ${media.tablet} {
    width: 200px;
    height: 280px;
  }

  @media ${media.desktop} {
    width: 408px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.medium};
  justify-content: space-between;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.small};
`

const TagsWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacings.small};

  @media ${media.tablet} {
    flex-direction: row;
    gap: 2rem;
  }
`

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardImage src={project.image} alt={project.altText} />
      <ContentWrapper>
        <InfoWrapper>
          <CardHeading title={project.name} />
          <p>{project.description}</p>
          <TagsWrapper>
            {project.tags.map(tag => {
              return <Tag key={tag} tag={tag} />
            })}
          </TagsWrapper>
        </InfoWrapper>
        <ButtonWrapper>
          <ButtonLink text="Live demo" link={project.netlify} icon="../assets/globe-icon.svg" />
          <ButtonLink text="View the code" link={project.github} icon="../assets/github-icon.svg" />
        </ButtonWrapper>
      </ContentWrapper>
    </Card>
  )
}

export default ProjectCard
