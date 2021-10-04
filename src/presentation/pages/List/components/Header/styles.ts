import styled from "styled-components";

export const HeaderComponent = styled.header`
  background-color: var(--violet);
  color: var(--white);

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
