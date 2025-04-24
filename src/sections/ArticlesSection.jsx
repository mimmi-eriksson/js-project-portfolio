import ArticleCard from "../components/ArticleCard"
import SectionHeading from "../typhography/SectionHeading"
import styled from "styled-components"
import media from "../styles/media.js"

const SectionWrapper = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacings.xLarge} ${({ theme }) => theme.spacings.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.large};

  @media ${media.tablet} {
    padding-inline: 2rem;
    align-items: flex-start;
  }
  @media ${media.desktop} {
    padding-inline: 2rem;
    align-items: flex-start;
  }
`

const ArticlesWrapper = styled.div`
  max-width: 958px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.large};
  justify-content: center;

  @media ${media.desktop} {
    flex-direction: row;
    align-self: center;
  }
`

const ArticlesSection = ({ articles }) => {
  // show latest article first
  const sortedArticles = articles.sort((a, b) => (b.id - a.id))
  return (
    <section id="articlesSection">
      <SectionWrapper>
        <ContentWrapper>
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
        </ContentWrapper>
      </SectionWrapper>
    </section>
  )
}

export default ArticlesSection