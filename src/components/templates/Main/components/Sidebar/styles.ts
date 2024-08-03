import styled from "styled-components";

export const Sidebar = styled.aside`
  grid-area: sidebar;

  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => theme.spacings.medium};

  background-color: ${({ theme }) => theme.colors.grey200};
`;

export const WrapperPath = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xsmall};
`;

export const WrapperRoute = styled.ul<{
  $open: boolean;
  $routeAmount: number;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xsmall};

  padding-left: ${({ theme }) => theme.spacings.large};

  max-height: ${({ theme, $open, $routeAmount }) => {
    if (!$open) return "0rem";

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

  opacity: ${({ $open }) => {
    if (!$open) return 0.5;
    return 1;
  }};

  overflow: hidden;

  transition: max-height 0.2s, opacity 0.2s;
`;
