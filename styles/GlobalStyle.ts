import { createGlobalStyle } from 'styled-components'
import settings from 'settings'

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
    color:${settings.styles.colors.neutral}
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

  p {
    margin:0;
  }

  h2,h3,h4 {
    margin:0;
    margin-bottom:${settings.styles.gap};
  }

  // animations
  .blink-1 {
    -webkit-animation: blink-1 1.5s ease-in-out infinite both;
    animation: blink-1 1.5s ease-in-out infinite both;
  }
  @keyframes blink-1 {
      0% { opacity: 1; }
      25% { opacity: 0; }
      50% { opacity: 1; }
      75% { opacity: 0; }
  }
`
