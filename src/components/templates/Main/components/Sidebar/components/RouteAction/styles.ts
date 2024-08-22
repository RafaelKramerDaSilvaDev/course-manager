import styled from "styled-components";
import { Container } from "../../../../../../UI/atoms/Container";

export const RouteAction = styled.li`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacings.xsmall};
  min-height: 38px;
  min-width: 38px;

  background-color: ${({ theme }) => theme.colors.white100};
  color: ${({ theme }) => theme.colors.grey500};

  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  overflow-wrap: normal;
  white-space: nowrap;

  user-select: none;
  cursor: pointer;
  overflow: hidden;

  transition: filter 0.2s ease-out;

  &:hover {
    filter: brightness(90%);
  }
`;

export const IconContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 40px;
  min-width: 40px;
`;
