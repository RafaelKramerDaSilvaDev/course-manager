import styled from "styled-components";

export const Span = styled.span<{
  $fontSize?: number | string;
  $color?: string;
}>`
  font-size: ${({ $fontSize }) => {
    if (typeof $fontSize === "number") {
      return `${$fontSize}px`;
    }

    return $fontSize;
  }};
  color: ${({ $color }) => $color};

  user-select: none;
`;
