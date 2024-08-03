import { HTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

type ButtonProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Button {...rest}>{children}</S.Button>;
};
