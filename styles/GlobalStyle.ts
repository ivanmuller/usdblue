import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    padding: 0;
    margin: 0;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration:underline
    }
  }

  * {
    box-sizing: border-box;
  }

  ol, ul {
    list-style: none;
  }

  .text-center {
    text-align:center;
  }
`
