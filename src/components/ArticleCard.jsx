import ButtonLink from "./ButtonLink"
import CardHeading from "../typhography/CardHeading.jsx"
import Tag from "./Tag"

const ArticleCard = ({ article }) => {
  return (
    <article>
      <img src={article.image} alt={article.altText} />
      <div>
        <ul>
          <Tag tag={article.date} />
        </ul>
        <CardHeading title={article.title} />
      </div>
      <p>{article.text}</p>
      <ButtonLink text="Read article" link={article.link} icon="../assets/article-icon.png" />
    </article>
  )
}

export default ArticleCard