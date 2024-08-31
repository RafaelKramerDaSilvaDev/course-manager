import styled from "styled-components";

export const Sidebar = styled.aside`
  grid-area: sidebar;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacings.small};
  padding: ${({ theme }) => theme.spacings.small};

  background-color: ${({ theme }) => theme.colors.grey200};
`;

export const WrapperPath = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const WrapperRoute = styled.ul<{
  $isOpen: boolean;
  $routeAmount: number;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.small};

  padding-left: 16px;

  max-height: ${({ $isOpen, $routeAmount }) => {
    if (!$isOpen) return "0px";

    const routeHeight = 38;
    const routePadding = 4;
    const heightAmount = $routeAmount * routeHeight;
    const gapAmount = $routeAmount * routePadding;

    return `${heightAmount + gapAmount}px`;
  }};

  opacity: ${({ $isOpen }) => {
    if (!$isOpen) return 0.5;
    return 1;
  }};

  overflow: hidden;

  transition: max-height ease-in-out 0.2s, opacity ease-in-out 0.2s;

  :first-child {
    margin-top: 4px;
  }

  :last-child {
    margin-bottom: 4px;
  }
`;
