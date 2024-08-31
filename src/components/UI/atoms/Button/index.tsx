import { forwardRef, HTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

type ButtonProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <S.Button ref={ref} {...rest}>
        {children}
      </S.Button>
    );
  }
);
