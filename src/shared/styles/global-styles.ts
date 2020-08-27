import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    word-break:break-all;
    letter-spacing:0.1em;
  }
  html, body{
    height:100%;
    width:100%;
    background-color: skyblue;
  }
`

export default GlobalStyle
