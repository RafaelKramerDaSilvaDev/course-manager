import styled from "styled-components";
import { Container } from "../../UI/atoms/Container";

export const MainTemplate = styled.main<{ $openSidebar: boolean }>`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content";

  grid-template-columns: ${({ $openSidebar }) => {
    if ($openSidebar) {
      return "48px auto";
    }
    return "260px auto";
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
