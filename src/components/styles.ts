import styled from "styled-components";

export const LoadingCSS = styled.div`
  display: none;
  width: 100%;
  position: fixed;
  background-color: rgba(51, 107, 125, 0.9);
  height: 100%;
  z-index: 100;
  top: 0;

  img {
    margin: 0 auto;
    display: table;
    top: 25%;
    max-width: 25%;
    position: relative;
  }

  .cortina {
    opacity: 1;
    z-index: 151;
    width: 100%;
    height: 100%;
    position: relative;
  }

  @keyframes load {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes load {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @media only screen and (max-width: 1368px) {
    img {
      margin: 0 auto;
      display: table;
      top: 30%;
      position: relative;
    }
  }

  @media only screen and (max-width: 800px) {
    img {
      margin: 0 auto;
      display: table;
      top: 20%;
      position: relative;
    }
  }

  @media only screen and (max-width: 480px) {
    img {
      top: 25%;
      max-width: 80%;
    }
  }
`;
