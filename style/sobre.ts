import styled from "styled-components";

export const SobreStyled = styled.div`
  div:nth-child(1) {
    padding: 50px;
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--color-white);
    span {
      display: flex;
      align-items: center;
      gap: 10px;
      a {
      }
    }
  }
  div:nth-child(2) {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    width: 100%;
    max-width: 405px;
  }
  margin-bottom: 20px;
`;
