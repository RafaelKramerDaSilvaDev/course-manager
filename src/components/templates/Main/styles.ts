import styled from "styled-components";

export const MainTemplate = styled.main`
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar content";

  height: 100vh;
  width: 100vw;
`;
