import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, 
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  }

body {
  margin: 0;
  padding: 20px;
  background-color:#565A97;
  width: 100%;
  min-height: 100vh;

}

ol, ul, li {
  list-style: none;
}
`;

export default GlobalStyles;
