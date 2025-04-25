import styled from "styled-components"
import media from "../styles/media.js"

const HeaderContent = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.small};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1em;
  font-weight: 400;

  @media ${media.mobile} {
    display: none;
  }
  @media ${media.tablet} {
    display: block;
  }
  @media ${media.desktop} {
    font-size: 1.125em;
  }
`
const NavContent = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`

const NavLink = styled.a`
  text-underline-offset: ${({ theme }) => theme.spacings.xSmall};

  &:hover {
    text-decoration: underline; 
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 5px;
    border-radius: 2px;
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