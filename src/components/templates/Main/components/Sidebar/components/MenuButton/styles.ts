import styled from "styled-components";
import { Button } from "../../../../../../UI/atoms/Button";
import { Container } from "../../../../../../UI/atoms/Container";

export const MenuButton = styled(Button)`
  display: flex;
  align-items: center;

  min-height: 38px;
  min-width: 38px;

  background-color: ${({ theme }) => theme.colors.white100};
  color: ${({ theme }) => theme.colors.grey500};

  user-select: none;
  cursor: pointer;

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
