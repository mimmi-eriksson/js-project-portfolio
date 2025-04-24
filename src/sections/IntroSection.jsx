import MainHeading from "../typhography/MainHeading"
import SmallHeading from "../typhography/SmallHeading"
import BodyText from "../typhography/BodyText"
import styled from "styled-components"
import media from "../styles/media.js"

const SectionWrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.large} ${({ theme }) => theme.spacings.medium};
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacings.medium};
  margin-bottom: 3rem;

  @media ${media.desktop} {
    margin: ${({ theme }) => theme.spacings.xLarge};
    flex-direction: row;
    gap: 6.25rem;
  }
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`

const ImageWrapper = styled.div`
  position: relative;
  align-self: center;
`
const ImageBorder = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.primary};
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
              <SmallHeading text={"I am Mimmi Eriksson"} />
              <MainHeading text={"Frontend Developer"} />
            </div>
            <BodyText lineHeight="double" text="I have a PhD in chemistry and a passion for problem-solving. With 10 years in R&D, I've developed strong skills in project management, teamwork, and creating impactful solutions. I currently focus on building accessible, responsive websites using modern technologies like React and TypeScript, and I'm eager to expand my knowledge into backend and full-stack development." />
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