import styled from "styled-components";

type StyledContainerProps = {
  $width?: number | string;
  $height?: number | string;
};

export const Container = styled.div<StyledContainerProps>`
  width: ${({ $width }) => {
    if (!$width) {
      return "auto";
    }

    if (typeof $width === "string") {
      return $width;
    }

    return $width;
  }};

  height: ${({ $height }) => {
    if (!$height) {
      return "auto";
    }

    if (typeof $height === "string") {
      return $height;
    }

    return $height;
  }};
`;
