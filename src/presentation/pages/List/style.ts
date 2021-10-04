import styled from "styled-components";

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
