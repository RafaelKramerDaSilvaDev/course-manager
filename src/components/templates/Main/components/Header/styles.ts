import styled from "styled-components";
import { Container } from "../../../../UI/atoms/Container";

export const Header = styled(Container)`
  grid-area: header;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.medium};

  background-color: ${({ theme }) => theme.colors.grey300};
  padding: ${({ theme }) => `${theme.spacings.medium} ${theme.spacings.large}`};

  border-bottom: 2px solid ${({ theme }) => theme.colors.white300};
`;
