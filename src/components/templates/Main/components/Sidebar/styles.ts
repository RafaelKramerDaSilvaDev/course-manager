import styled from "styled-components";

export const Sidebar = styled.aside`
  grid-area: sidebar;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xsmall};

  padding: ${({ theme }) => theme.spacings.medium};

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
  gap: ${({ theme }) => theme.spacings.xsmall};

  padding-left: 2rem;

  max-height: ${({ theme, $isOpen, $routeAmount }) => {
    if (!$isOpen) return "0rem";

    let gapAmount = "";
    let heightAmount = "";

    for (let i = 0; i < $routeAmount; i++) {
      heightAmount += ` + 2.5rem`;
      gapAmount += ` + ${theme.spacings.xsmall}`;
    }

    heightAmount = heightAmount.slice(3);
    gapAmount = gapAmount.slice(3);

    return `calc(${heightAmount} + ${gapAmount})`;
  }};

  opacity: ${({ $isOpen }) => {
    if (!$isOpen) return 0.5;
    return 1;
  }};

  overflow: hidden;

  transition: max-height ease-in-out 0.2s, opacity ease-in-out 0.2s;

  li:first-child {
    margin-top: ${({ theme }) => theme.spacings.xsmall};
  }
`;
