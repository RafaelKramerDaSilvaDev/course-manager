import { ReactNode } from "react";
import * as S from "./styles";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return <S.Header>{children}</S.Header>;
};
