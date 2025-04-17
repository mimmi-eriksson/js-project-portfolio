import ButtonSocial from "../components/ButtonSocial"

const ContactSection = () => {
  return (
    <section>
      <div>
        <h2>Let's Talk</h2>
        <div>
          <img src="../assets/profile-picture.jpg" alt="profile picture" />
          <div>
            <h3>Mimmi Eriksson</h3>
            <h3><a href="tel:+46709961552">+46(0)709 96 15 52</a></h3>
            <h3><a href="mailto:mimmi.aj.eriksson@gmail.com">mimmi.aj.eriksson@gmail.com</a></h3>
          </div>
          <div>
            <ul>
              <li><ButtonSocial link="https://www.linkedin.com/in/mimmi-aj-eriksson/" icon="../assets/linkedin-icon.png" text="LinkedIn profile" /></li>
              <li><ButtonSocial link="https://github.com/mimmi-eriksson" icon="../assets/github-icon.png" text="GitHub profile" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection