import styled from "styled-components";

export const RouteAction = styled.li`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacings.large};
  padding-left: ${({ theme }) => theme.spacings.large};

  min-height: 2.5rem;

  background-color: ${({ theme }) => theme.colors.white100};
  color: ${({ theme }) => theme.colors.grey500};

  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  user-select: none;
  cursor: pointer;
`;
