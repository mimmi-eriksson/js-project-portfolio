import ArticleCard from "../components/ArticleCard"
import SectionHeading from "../typhography/SectionHeading"
import styled from "styled-components"
import theme from "../styles/theme.js"
import media from "../styles/media.js"

const SectionWrapper = styled.section`
  padding: ${theme.spacings.xLarge} ${theme.spacings.small};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.large};

  @media ${media.tablet} {
    padding-inline: 2rem;
    align-items: flex-start;
  }
  @media ${media.desktop} {
    padding-inline: 17rem;
    align-items: flex-start;
  }
`

const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.large};
  justify-content: space-between;

  @media ${media.desktop} {
    flex-direction: row;
  }
`

const ArticlesSection = ({ articles }) => {
  // show latest article first
  const sortedArticles = articles.sort((a, b) => (b.id - a.id))
  return (
    <SectionWrapper id="articlesSection">
      <SectionHeading title="My Words" />
      <ArticlesWrapper>
        {sortedArticles.map(article => {
          return (
            <ArticleCard
              key={article.id}
              article={article} />
          )
        })}
      </ArticlesWrapper>
    </SectionWrapper>
  )
}

export default ArticlesSection