import styled from "styled-components";
import { Container } from "../../../../../../UI/atoms/Container";

export const Circle = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  width: 32px;
  height: 32px;

  background-color: ${({ theme }) => theme.colors.white100};

  cursor: pointer;

  padding: ${({ theme }) => theme.spacings.medium};
`;
