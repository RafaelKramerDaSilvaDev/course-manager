import styled from "styled-components";
import { Container } from "../../../../UI/atoms/Container";

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;

  gap: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => theme.spacings.medium};

  background-color: ${({ theme }) => theme.colors.grey400};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey100};

  width: 100%;
  height: 48px;
`;
