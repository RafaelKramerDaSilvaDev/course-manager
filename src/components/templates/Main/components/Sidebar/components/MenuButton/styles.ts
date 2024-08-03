import styled from "styled-components";
import { Button } from "../../../../../../UI/atoms/Button";

export const MenuButton = styled(Button)`
  display: flex;
  align-items: center;

  padding: ${({ theme }) => `0rem ${theme.spacings.large}`};
  height: 2.5rem;

  background-color: ${({ theme }) => theme.colors.white100};
  color: ${({ theme }) => theme.colors.grey500};

  user-select: none;
  cursor: pointer;

  transition: filter 0.2s ease-out;

  &:hover {
    filter: brightness(90%);
  }
`;
