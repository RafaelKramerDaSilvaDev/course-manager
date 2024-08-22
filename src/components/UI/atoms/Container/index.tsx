import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

type ContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...rest }, ref) => {
    return (
      <S.Container ref={ref} {...rest}>
        {children}
      </S.Container>
    );
  }
);
