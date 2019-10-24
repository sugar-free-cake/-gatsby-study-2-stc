import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


*, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    margin: 0; 
  }

  body {
    /* font-family: Slack-Circular-Pro, "Helvetica Neue", Helvetica, "Segoe UI", 
      Tahoma, Arial, sans-serif;*/
    font-weight: 400;
    line-height: 1.7;
    margin: 0; 
    padding: 0;
    color: #000;
  }

  
  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  h1{    
    font-family: "Palatino Linotype","Book Antiqua",Palatino,serif;
    font-weight: 400;
    font-style: normal;
    font-size: 32px;
    letter-spacing: .25px;
    text-transform: none;
    line-height: 1.2em;
    color: #18274a;
  }

  h2{
    color: #334066;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 22px;
    letter-spacing: 0.25px;
    text-transform: none;
    line-height: 1.2em;
    margin-bottom: 11px;
  }

  p{
    font-family: adelle-sans;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 1.6em;
    color: rgba(26, 26, 26, 0.79);
  }
  
  a, a:visited, a:hover, a:active{
    text-decoration:none;
    color: #0f639f;
  }
`

export default GlobalStyle
