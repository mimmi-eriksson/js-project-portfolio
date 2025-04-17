import ButtonSocial from "../components/ButtonSocial"
import SectionHeading from "../typhography/SectionHeading"

const ContactSection = () => {
  return (
    <section id="contactSection">
      <div>
        <SectionHeading title="Let's Talk" />
        <div>
          <img src="../assets/profile-picture.jpg" alt="profile picture" />
          <div>
            <h3>Mimmi Eriksson</h3>
            <h3><a href="tel:+46709961552">+46(0)709 96 15 52</a></h3>
            <h3><a href="mailto:mimmi.aj.eriksson@gmail.com">mimmi.aj.eriksson@gmail.com</a></h3>
          </div>
          <div>
            <ul>
              <li><ButtonSocial link="https://www.linkedin.com/in/mimmi-aj-eriksson/" icon="../assets/linkedin-icon.svg" text="LinkedIn profile" /></li>
              <li><ButtonSocial link="https://github.com/mimmi-eriksson" icon="../assets/github-icon.svg" text="GitHub profile" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection