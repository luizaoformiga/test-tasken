import { createGlobalStyle } from "styled-components";

export const CreateGobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
  }

  :root {
    --white: #ffffff;
    --dark-white: #005dab;
    --violet: #2d044e;
  }
  
  html,
  body,
  #root {
    height: 100%;
    font-family: "Roboto", sans-serif;
    background-color: #DAD3D3;
  }
`;
