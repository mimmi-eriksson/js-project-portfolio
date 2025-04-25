import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
  scroll-behavior: smooth;
  }

  body {
    font-family: "Poppins", sans-serif;
  }

  h1, h2 {
    font-family: "Urbanist", "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle