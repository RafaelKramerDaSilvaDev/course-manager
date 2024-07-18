import styled from "styled-components";

export const MainTemplate = styled.main`
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar content";

  grid-template-columns: 280px auto;

  height: 100vh;
  width: 100vw;

  background-color: #17153b;
`;
