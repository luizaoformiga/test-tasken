import styled, { createGlobalStyle } from 'styled-components';

export const CreateGobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  html,
  body,
  #root {
    height: 100%;
    font-family: "Roboto", sans-serif;
    background-color: #DAD3D3;
  }
`;
  
export const Header = styled.header`
    background-color: #2D044E;
    color: #fff;
  
    align-items: center;
    text-align: center;
  
    padding: 20px;
  
  h2 {
    padding-top: 70px;
    padding-bottom: 30px;
  
    font-size: 72px;
  }
  
  h4 {
    font-size: 62px;
    padding-bottom: 20px;
  }

  @media all and (max-width: 800px) {
    h2 {
      font-size: 48px;
      padding-top: 30px;
    }
  
    h4 {
      font-size: 36px;
      padding-bottom: 10px;
    }
  }
`;
  
export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  
    padding: 20px;
  
  option {
    padding: 60px;
    font-size: 20px;
  }

  @media all and (max-width: 800px) {
    option {
      font-size: 12px;
      padding: 2px; 
    }
  }
`;
  
export const Table = styled.table`
    background-color: #ffffff;
    border-radius: 5px;
  
  td {
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
  
    padding: 30px;
    font-size: 25px;
  }
  
  h2 {
    color: #2D044E;
  }

  p {
    padding-right: 3.3px;
  }

  @media all and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      padding: auto;
  
      text-align: center;
      align-items: center;

    td {
      padding: 4px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  
    h2 {
      font-size: 16px;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  
    p {
      font-size: 16px;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
`;
  
export const Footer = styled.footer`
    text-align: center;
  
  p {
    font-size: 20px;
    color: rgb(138, 134, 134);
    padding: 20px;
  }

  @media all and (max-width: 800px) {
    p {
      font-size: 14px; 
    }
  }
`;
  