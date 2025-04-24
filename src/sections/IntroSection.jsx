import MainHeading from "../typhography/MainHeading"
import SmallHeading from "../typhography/SmallHeading"
import BodyText from "../typhography/BodyText"
import styled from "styled-components"
import media from "../styles/media.js"

const SectionWrapper = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacings.large} ${({ theme }) => theme.spacings.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ContentWrapper = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.medium};
  margin-bottom: ${({ theme }) => theme.spacings.large};

  @media ${media.tablet} {
    gap: ${({ theme }) => theme.spacings.large};
  }
  @media ${media.desktop} {
    max-width: 1200px;
    flex-direction: row;
    align-items: center;
    /* gap: 5rem; */
  }
  @media (${media.desktopXL}) {
    gap: 6.25rem; 
    margin-bottom: 8rem;
  }
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;
  align-self: center;

  @media ${media.tablet} {
    max-width: 400px;
  }
  @media ${media.desktop} {
    max-width: 400px;
  }
  @media ${media.desktopXL} {
    max-width: 500px;
    width: 500px;
  }
`
const ImageBorder = styled.div`
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.primary};
  clip-path: circle(50%);

  @media ${media.desktop} {
    width: 400px;
  }
  @media ${media.desktopXL} {
    width: 500px;
  }
`
const ProfileImage = styled.img`
  position: absolute;
  top: 5px;
  left: 5px;
  width: calc(100% - 10px);
  aspect-ratio: 1 / 1;
  max-width: 290px;
  object-fit: cover;
  clip-path: circle(50%);

  @media ${media.tablet} {
    max-width: 390px;
  }
  @media ${media.desktop} {
    max-width: 390px;
  }
  @media ${media.desktopXL} {
    max-width: 490px;
    width: 490px;
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