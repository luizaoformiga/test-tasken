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
    max-width: 100%;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;

    border-bottom: #999999 solid 1px;
    width: 100%;
    margin-bottom: 20px;

  th,
  td {
    border-right: #999999 solid 1px;
    font-size: 16px;
    color: #2D044E;
    padding: 10px;
    line-height: 20px;
    text-align: left;
    vertical-align: middle;
  }

  td:last-child {
    border-right: 0;
  }

  thead th {
    font-weight: normal;
    background-color: #005dab;
    color: #fff;
    font-size: 15px;
  }

  tbody > tr:nth-child(odd) > td,
  tbody > tr:nth-child(odd) > th {
    background-color: #f8f8f8;
  }

@media (max-width: 767px) { 
    display: block;
    position: relative;
    width: 100%;

  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  td,
  th {
    height: 35px;
  }

  thead {
    float: left;
  }

  tbody {
    width: auto;
    position: relative;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
  }

  tbody tr {
    display: inline-block;
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
  