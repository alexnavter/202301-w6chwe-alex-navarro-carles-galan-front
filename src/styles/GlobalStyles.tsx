import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, 
*:after,
*:before {
  box-sizing: border-box;
  text-decoration: none;
}

body {
  padding: 20px;
  background-color: #fff;
  font-family: helvetica;
  min-height: 100vh;
}

ol, ul, li {
  list-style: none;
}
`;

export default GlobalStyles;
