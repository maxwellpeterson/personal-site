import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import "typeface-cooper-hewitt"
 
export default createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    font-family: "Cooper Hewitt";
    font-size: 20px;
    font-weight: 300;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    color: black;
    text-decoration: none;
  }
 `