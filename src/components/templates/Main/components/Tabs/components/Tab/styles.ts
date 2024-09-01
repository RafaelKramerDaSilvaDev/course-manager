import styled from "styled-components";
import { Button } from "../../../../../../UI/atoms/Button";
import { Span } from "../../../../../../UI/atoms/Span";

export const Tab = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => `${theme.spacings.small} ${theme.spacings.medium}`};
  min-width: fit-content;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  background-color: ${({ theme }) => theme.colors.white100};

  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  user-select: none;

  transition: filter 0.2s ease-out;

  span:last-child {
    background-color: ${({ theme }) => theme.colors.white100};
    border-radius: 50%;
  }

  > span:hover {
    filter: brightness(90%);
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const PathText = styled(Span)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.grey500};
`;

export const RouteText = styled(Span)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.grey500};
`;
