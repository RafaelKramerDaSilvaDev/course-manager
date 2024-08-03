import { HTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

type ContainerProps = {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
} & HTMLAttributes<HTMLDivElement>;

export const Container = ({
  children,
  height,
  width,
  ...rest
}: ContainerProps) => {
  return (
    <S.Container $height={height} $width={width} {...rest}>
      {children}
    </S.Container>
  );
};
