import FadeInSection from "./FadeInSection"
import ButtonSocial from "../components/ButtonSocial"
import SectionHeading from "../typhography/SectionHeading"
import SmallHeading from "../typhography/SmallHeading"
import styled from "styled-components"
import media from "../styles/media.js"

const SectionWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacings.xLarge} ${({ theme }) => theme.spacings.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.large};
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.large};
  align-items: center;
`

const ProfileImage = styled.img`
  width: 164px;
  height: 164px;
  object-fit: cover;
  clip-path: circle(50%);
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xSmall};
  align-items: center;
`

const Link = styled.a`

  &:hover {
    color: #c0c0c0;
  }

  &:focus-visible {
    outline: 2px solid;
    outline-offset: 5px;
    border-radius: 2px;
  }

  @media ${media.mobile} {
    > * {
      font-size: 1.25em;
    }
    }
  @media (max-width: 330px) {
    > * {
      font-size: 1em;
    }
  }
`
const ButtonsWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const ContactSection = () => {
  return (
    <FadeInSection name="contactSection">
      <SectionWrapper>
        <SectionHeading title="Let's Talk" />
        <ContentWrapper>
          <ProfileImage src="../assets/profile-picture.jpg" alt="profile picture" />
          <InfoWrapper>
            <SmallHeading text={"Mimmi Eriksson"} />
            <Link href="tel:+46709961552">
              <SmallHeading text={"+46(0)709 96 15 52"} />
            </Link>
            <Link href="mailto:mimmi.aj.eriksson@gmail.com">
              <SmallHeading text={"mimmi.aj.eriksson@gmail.com"} />
            </Link>
          </InfoWrapper>
          <ButtonsWrapper>
            <ButtonSocial link="https://www.linkedin.com/in/mimmi-aj-eriksson/" icon="/assets/linkedin-btn.svg" text="LinkedIn profile" />
            <ButtonSocial link="https://github.com/mimmi-eriksson" icon="/assets/github-btn.svg" text="GitHub profile" />
          </ButtonsWrapper>
        </ContentWrapper>
      </SectionWrapper>
    </FadeInSection>
  )
}

export default ContactSection