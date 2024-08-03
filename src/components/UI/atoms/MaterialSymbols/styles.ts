import styled from "styled-components";

export const Span = styled.span<{ $fontSize?: number; $color?: string }>`
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ $color }) => $color};

  user-select: none;
`;
