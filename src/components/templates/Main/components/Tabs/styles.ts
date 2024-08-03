import styled from "styled-components";
import { Container } from "../../../../UI/atoms/Container";

export const Wrapper = styled(Container)`
  padding: ${({ theme }) => theme.spacings.medium};

  background-color: ${({ theme }) => theme.colors.grey400};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey100};
`;

export const WrapperTabs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.medium};

  height: 1.75rem;
`;
