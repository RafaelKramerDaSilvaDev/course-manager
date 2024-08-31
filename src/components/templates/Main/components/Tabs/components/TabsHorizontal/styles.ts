import styled from "styled-components";
import { Container } from "../../../../../../UI/atoms/Container";

export const Wrapper = styled(Container)<{ $openSidebar: boolean }>`
  display: flex;

  gap: ${({ theme }) => theme.spacings.medium};

  /* TODO: Valores abaixo devem ser ajustados */

  width: ${({ $openSidebar }) =>
    `calc(100dvw - ${$openSidebar ? 200 : 400}px)`};
`;
