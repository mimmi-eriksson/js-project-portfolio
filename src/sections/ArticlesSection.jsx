import ArticleCard from "../components/ArticleCard"

const ArticlesSection = ({ articles }) => {
  // show latest article first
  const sortedArticles = articles.sort((a, b) => (b.id - a.id))
  return (
    <section>
      <h2>My Words</h2>
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