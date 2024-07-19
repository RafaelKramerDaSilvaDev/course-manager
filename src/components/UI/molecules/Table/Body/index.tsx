import { ReactNode } from "react";
import * as S from "./styles";

type BodyProps = {
  children: ReactNode;
};

export const Body = ({ children }: BodyProps) => {
  return <S.Body>{children}</S.Body>;
};
