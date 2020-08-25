import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export default createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    font-display: block !important;
  }

  html {
    font-family: "Cooper Hewitt";
    font-size: 16px;
    font-weight: 300;

    @media (min-width: 400px) {
      font-size: 18px;
    }

    @media (min-width: 900px) {
      font-size: 20px;
    }

    /* Not supported by Safari */
    scroll-behavior: smooth;
  }

  a {
    color: black;
    text-decoration: none;
  }

  p {
    margin: 0;
    line-height: 1.25;
  }
 `
