import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
  }

html {
  font-family: ${(props) => props.theme.fonts.primary};
 
}

body,
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: "Montserrat";
  
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

button,
input,
textarea,
select {
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  border: none;
  padding: 0;
}

`;

export default GlobalStyle;
