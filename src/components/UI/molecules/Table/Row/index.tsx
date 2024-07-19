import { ReactNode } from "react";
import * as S from "./styles";

type RowProps = {
  children: ReactNode;
};

export const Row = ({ children }: RowProps) => {
  return <S.Row>{children}</S.Row>;
};
