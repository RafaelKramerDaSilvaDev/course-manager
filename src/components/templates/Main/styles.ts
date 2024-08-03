import styled from "styled-components";
import { Container } from "../../UI/atoms/Container";

export const MainTemplate = styled.main<{ $collapseSidebar: boolean }>`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content";

  grid-template-columns: ${({ $collapseSidebar }) => {
    if ($collapseSidebar) {
      return "72px auto";
    }
    return "280px auto";
  }};

  grid-template-rows: min-content auto;

  height: 100dvh;
  width: 100dvw;

  background-color: ${({ theme }) => theme.colors.white100};

  overflow: hidden;

  transition: grid-template-columns ease-in-out 0.2s;
`;

export const Content = styled(Container)`
  grid-area: content;
`;
