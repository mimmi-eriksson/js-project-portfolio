import ButtonLink from "./ButtonLink.jsx"
import Tag from "./Tag.jsx"
import CardHeading from "../typhography/CardHeading.jsx"
import BodyText from "../typhography/BodyText.jsx"
import styled from "styled-components"
import media from "../styles/media.js"

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};

  @media ${media.tablet} {
    flex-direction: row;
    gap: 37px;
  }

  @media ${media.desktop} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacings.small};
  }
`

const CardImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  box-shadow: 2px 2px 5px rgba(31, 0, 124, 0.25);

  @media ${media.tablet} {
    width: 200px;
    height: 280px;
  }

  @media ${media.desktop} {
    width: 408px;
    height: 280px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};
  justify-content: space-between;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.small};
`

const TagsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacings.small};

  @media ${media.tablet} {
    flex-direction: row;
    gap: 2rem;
  }
  @media ${media.desktop} {
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
          <BodyText text={project.description} />
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
