import ButtonLink from "./ButtonLink"
import CardHeading from "../typhography/CardHeading.jsx"
import Tag from "./Tag"
import styled from "styled-components"
import theme from "../styles/theme.js"
import media from "../styles/media.js"


const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.medium};
  font-family: ${theme.fonts.body};
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
  gap: ${theme.spacings.xSmall};
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
      <p>{article.text}</p>
      <ButtonLink text="Read article" link={article.link} icon="../assets/article-icon.svg" />
    </Card>
  )
}

export default ArticleCard