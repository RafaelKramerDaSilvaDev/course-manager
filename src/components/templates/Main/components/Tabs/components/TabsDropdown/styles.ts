import styled from "styled-components";
import { Button } from "../../../../../../UI/atoms/Button";

export const OpenButton = styled(Button)<{ $rotate: boolean }>`
  transform: ${({ $rotate }) => {
    if (!$rotate) {
      return "rotate(180deg)";
    }
    return "rotate(0deg)";
  }};
`;

export const DropdownContainer = styled.ul`
  position: absolute;
  top: 120px;
  right: 8px;

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => theme.spacings.medium};

  background-color: ${({ theme }) => theme.colors.grey400};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey100};
`;
