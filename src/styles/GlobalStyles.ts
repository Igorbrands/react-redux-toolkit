import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  *:focus {
    outline:0;
  }

  html, body, #root {
    height:100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font:14px sans-serif;
  }

  a {
    text-decoration:none;
  }

  ul {
    list-style:none
  }

  button {
    cursor: pointer;
  }`;

export default GlobalStyle;
