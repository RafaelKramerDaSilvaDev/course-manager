import styled from "styled-components";
import { Container } from "../../../../../../UI/atoms/Container";

export const Circle = styled(Container)`
  border-radius: 50%;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white100};

  padding: ${({ theme }) => theme.spacings.medium};
`;
