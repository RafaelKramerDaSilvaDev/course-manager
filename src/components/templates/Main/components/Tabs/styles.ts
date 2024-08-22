import styled from "styled-components";
import { Container } from "../../../../UI/atoms/Container";

export const TabContainer = styled(Container)<{ $openSidebar: boolean }>`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => theme.spacings.medium};

  background-color: ${({ theme }) => theme.colors.grey400};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey100};

  max-width: ${({ $openSidebar }) =>
    `calc(100dvw - ${$openSidebar ? 71 : 280}px)`};

  height: 48px;

  transition: max-width ease-in-out 0.2s;

  overflow: hidden;
`;
