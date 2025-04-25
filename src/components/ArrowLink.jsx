import styled from "styled-components"

const Link = styled.a`
  display: block;
  text-align: center;

  &:focus-visible {
    outline: 2px solid;
    outline-offset: 5px;
    border-radius: 2px;
  }

  &:focus-visible>img {
    animation: scrollAnimation 1s ease-out infinite alternate;
  }
`
const Arrow = styled.img`
  filter: ${({ $mode }) => $mode === "dark" ? "brightness(0) invert(1)" : "none"};
  position: relative;
  top: 0; 
  
  &:hover {
    animation: scrollAnimation 1s ease-out infinite alternate;
  }

  @keyframes scrollAnimation {
    0% {top: 0;}
    25% {top: 0;}
    75% {top: 16px;}
    100% {top: 16px;}
  }
`

const ArrowLink = ({ link, mode }) => {
  return (
    <Link href={link}>
      <Arrow $mode={mode} src="assets/arrow.svg" alt="go to next section" />
    </Link>
  )
}

export default ArrowLink
