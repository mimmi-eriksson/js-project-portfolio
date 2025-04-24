import ButtonLink from "./ButtonLink"
import CardHeading from "../typhography/CardHeading.jsx"
import BodyText from "../typhography/BodyText.jsx"
import Tag from "./Tag"
import styled from "styled-components"
import media from "../styles/media.js"


const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};
  align-items: flex-start;

  @media ${media.tablet} {
    gap: 2rem;
  }
`

const ArticleImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;

  @media ${media.tablet} {
    height: 340px;
  }
  @media ${media.desktop} {
    height: 340px;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xSmall};
  align-items: flex-start;
`

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <ArticleImage src={article.image} alt={article.altText} />
      <TitleWrapper>
        <ul>
          <Tag tag={article.date} />
        </ul>
        <CardHeading title={article.title} />
      </TitleWrapper>
      <BodyText text={article.text} />
      <ButtonLink text="Read article" link={article.link} icon="../assets/article-icon.svg" />
    </Card>
  )
}

export default ArticleCard