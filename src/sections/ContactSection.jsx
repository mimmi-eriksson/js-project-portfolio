import ButtonSocial from "../components/ButtonSocial"
import SectionHeading from "../typhography/SectionHeading"
import styled from "styled-components"
import theme from "../styles/theme.js"
import media from "../styles/media.js"

const SectionWrapper = styled.section`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  padding: ${theme.spacings.xLarge} ${theme.spacings.small};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.large};
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.large};
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
  gap: ${theme.spacings.xSmall};
  align-items: center;
  font-family: ${theme.fonts.body};
`

const InfoText = styled.h3`
  font-size: 1.25em;
  font-weight: 500;

  @media ${media.tablet} {
    font-size: 1.5em;
  }
  @media ${media.desktop} {
    font-size: 1.875em;
  }
`

const InfoLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.secondary};
  font-size: 1.25em;
  font-weight: 500;

  @media (max-width: 330px) {
    font-size: 1em;
  }
  @media ${media.tablet} {
    font-size: 1.5em;
  }
  @media ${media.desktop} {
    font-size: 1.875em;
  }
`
const ButtonsWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
`

const ContactSection = () => {
  return (
    <SectionWrapper id="contactSection">
      <SectionHeading title="Let's Talk" />
      <ContentWrapper>
        <ProfileImage src="../assets/profile-picture.jpg" alt="profile picture" />
        <InfoWrapper>
          <InfoText>Mimmi Eriksson</InfoText>
          <InfoLink href="tel:+46709961552">+46(0)709 96 15 52</InfoLink>
          <InfoLink href="mailto:mimmi.aj.eriksson@gmail.com">mimmi.aj.eriksson@gmail.com</InfoLink>
        </InfoWrapper>
        <ButtonsWrapper>
          <li><ButtonSocial link="https://www.linkedin.com/in/mimmi-aj-eriksson/" icon="../assets/linkedin-icon.svg" text="LinkedIn profile" /></li>
          <li><ButtonSocial link="https://github.com/mimmi-eriksson" icon="../assets/github-icon.svg" text="GitHub profile" /></li>
        </ButtonsWrapper>
      </ContentWrapper>
    </SectionWrapper>
  )
}

export default ContactSection