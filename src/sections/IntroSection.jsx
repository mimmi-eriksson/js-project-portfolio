import styled from "styled-components"
import theme from "../styles/theme.js"
import media from "../styles/media.js"

const SectionWrapper = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacings.medium};
  font-family: ${theme.fonts.body};
  margin-bottom: 3rem;

  @media ${media.desktop} {
    margin: ${theme.spacings.xLarge};
    flex-direction: row;
    gap: 6.25rem;
  }
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  p {
    font-size: 1em;
    font-weight: 400;
  }
  @media ${media.tablet} {
    p {
      font-size: 1.125em;
    }
  }
`
const SubHeading = styled.h3`
  font-size: 1.5em;
  font-weight: 500;

  @media ${media.desktop} {
    font-size: 1.875em;
  }
`
const Heading = styled.h1`
  font-family: ${theme.fonts.headings};
  font-size: 3.75em;
  font-weight: 700;
  line-height: 100%;

  @media ${media.tablet} {
    font-size: 5em;
  }
  @media ${media.desktop} {
    font-size: 6.25em;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  align-self: center;
`
const ImageBorder = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${theme.colors.primary};
  clip-path: circle(50%);

  @media ${media.tablet} {
    width: 400px;
    height: 400px;
  }
  @media ${media.desktop} {
    width: 500px;
    height: 500px;
  }
`
const ProfileImage = styled.img`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 290px;
  height: 290px;
  object-fit: cover;
  clip-path: circle(50%);

  @media ${media.tablet} {
    width: 390px;
    height: 390px;
  }
  @media ${media.desktop} {
    width: 490px;
    height: 490px;
  }
`
const ArrowLink = styled.a`
  display: block;
  text-align: center;
`
const Arrow = styled.img`
  position: relative;
  top: 0;
  animation: scrollAnimation 1s ease-out infinite alternate;

  @keyframes scrollAnimation {
    0% {
      top: 0;
    }
    25% {
      top: 0;
    }
    75% {
      top: 16px;
    }
    100% {
      top: 16px;
    }
  }
`


const IntroSection = () => {
  return (
    <section id="introSection">
      <SectionWrapper>
        <ContentWrapper>
          <InfoWrapper>
            <div>
              <SubHeading>I am Mimmi Eriksson</SubHeading>
              <Heading>Frontend Developer</Heading>
            </div>
            <p>I have a PhD in chemistry and a passion for problem-solving. With 10 years in R&D, I've developed strong skills in project management, teamwork, and creating impactful solutions. I currently focus on building accessible, responsive websites using modern technologies like React and TypeScript, and I'm eager to expand my knowledge into backend and full-stack development.</p>
          </InfoWrapper>
          <ImageWrapper>
            <ImageBorder />
            <ProfileImage src="../assets/profile-picture.jpg" alt="profile picture" />
          </ImageWrapper>
        </ContentWrapper>
        <ArrowLink href="#techSection">
          <Arrow src="assets/arrow.svg" alt="go to next section" />
        </ArrowLink>
      </SectionWrapper>
    </section>
  )
}

export default IntroSection