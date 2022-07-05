import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    scroll-behavior: smooth;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    font-family: ${(props) => props.theme.fonts.main};
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 1.6rem;
    background-color:  ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    color: ${(props) => props.theme.colors.primary1};
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary1};
  }
  h1{
    font-size: 2rem;
    font-weight: 200;
  }
  h2{
    font-size: 1.5rem;
    font-weight: 300;
  }
  li{
    list-style: none;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    outline: none;
  }
    
  #root, #__next {
    isolation: isolate;
    height: 100%;
  }

`

export default GlobalStyles
