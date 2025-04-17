import ArticleCard from "../components/ArticleCard"
import SectionHeading from "../typhography/SectionHeading"

const ArticlesSection = ({ articles }) => {
  // show latest article first
  const sortedArticles = articles.sort((a, b) => (b.id - a.id))
  return (
    <section id="articlesSection">
      <SectionHeading title="My Words" />
      {sortedArticles.map(article => {
        return (
          <ArticleCard
            key={article.id}
            article={article} />
        )
      })}
    </section>
  )
}

export default ArticlesSection