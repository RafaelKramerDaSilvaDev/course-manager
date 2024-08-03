import styled from "styled-components";
import { Container } from "../../atoms/Container";

export const WrapperToasts = styled(Container)`
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.large};

  height: 100%;
`;
