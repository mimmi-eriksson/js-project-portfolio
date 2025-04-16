import ButtonLink from "./ButtonLink"
import Tag from "./Tag"

const ArticleCard = ({ article }) => {
  return (
    <article>
      <img src={article.image} alt={article.altText} />
      <div>
        <Tag tag={article.date} />
        <h3>{article.title}</h3>
      </div>
      <p>{article.text}</p>
      <ButtonLink text="Read article" link={article.link} icon="../assets/article-icon.png" />
    </article>
  )
}

export default ArticleCard