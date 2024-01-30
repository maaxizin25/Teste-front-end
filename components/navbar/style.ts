import styled from "styled-components";

export const NavBarStyled = styled.div`
  display: flex;
  justify-content: center;
  height: 104px;
  nav {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:nth-child(2) {
      display: flex;
      gap: 20px;
      a {
        text-decoration: none;
        color: var(--color-black);
        padding: 10px;
        font-weight: 700;
      }
      a:nth-child(2) {
        background-color: var(--color-primary);
        border-radius: 16px;
        color: var(--color-white);
      }
    }
  }
`;
