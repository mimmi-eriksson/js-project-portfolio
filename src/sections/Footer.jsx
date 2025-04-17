import ButtonSocial from "../components/ButtonSocial"

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div>
        <div>
          <p>&copy; {new Date().getFullYear()} Mimmi Eriksson</p>
          <ul>
            <li><ButtonSocial link="https://www.linkedin.com/in/mimmi-aj-eriksson/" icon="../assets/linkedin-icon.svg" text="LinkedIn profile" /></li>
            <li><ButtonSocial link="https://github.com/mimmi-eriksson" icon="../assets/github-icon.svg" text="GitHub profile" /></li>
          </ul>
        </div>
        <nav
          role="navigation"
          aria-label="footer menu"
        >
          <ul>
            <li>
              <a href="#introSection">About</a>
            </li>
            <li>
              <a href="#contactSection">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer