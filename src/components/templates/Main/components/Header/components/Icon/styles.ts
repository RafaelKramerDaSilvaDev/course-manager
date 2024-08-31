import styled from "styled-components";
import { Container } from "../../../../../../UI/atoms/Container";

export const Circle = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 24px;
  min-height: 24px;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.white100};

  cursor: pointer;

  padding: ${({ theme }) => theme.spacings.medium};
`;
