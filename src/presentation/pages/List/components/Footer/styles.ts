import styled from "styled-components";

export const FooterComponent = styled.footer`
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
