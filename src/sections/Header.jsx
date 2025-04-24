import styled from "styled-components"
import media from "../styles/media.js"

const HeaderContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacings.small};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1em;
  font-weight: 400;

  @media ${media.desktop} {
    font-size: 1.125em;
  }
`
const NavContent = styled.ul`
  display: flex;
  justify-content: flex-end;
`

const NavLink = styled.a`
  padding-left: 2rem;
  text-underline-offset: ${({ theme }) => theme.spacings.xSmall};

  &:hover {
    text-decoration: underline; 
  }
`

const Header = () => {
  return (
    <header>
      <HeaderContent>
        <nav
          role="navigation"
          aria-label="Main menu"
        >
          <NavContent>
            <li>
              <NavLink href="#introSection">About</NavLink>
            </li>
            <li>
              <NavLink href="#projectsSection">Projects</NavLink>
            </li>
            <li>
              <NavLink href="#techSection">Tech</NavLink>
            </li>
            <li>
              <NavLink href="#skillsSection">Skills</NavLink>
            </li>
            <li>
              <NavLink href="#contactSection">Contact</NavLink>
            </li>
          </NavContent>
        </nav>
      </HeaderContent>
    </header>
  )
}

export default Header