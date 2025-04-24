import ButtonLink from "./ButtonLink"
import CardHeading from "../typhography/CardHeading.jsx"
import Tag from "./Tag"
import styled from "styled-components"

const ArticleImage = styled.img`
  width: 100%;
`

const ArticleCard = ({ article }) => {
  return (
    <article>
      <ArticleImage src={article.image} alt={article.altText} />
      <div>
        <ul>
          <Tag tag={article.date} />
        </ul>
        <CardHeading title={article.title} />
      </div>
      <p>{article.text}</p>
      <ButtonLink text="Read article" link={article.link} icon="../assets/article-icon.svg" />
    </article>
  )
}

export default ArticleCard