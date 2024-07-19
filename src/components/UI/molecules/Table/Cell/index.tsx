import { ReactNode } from "react";
import * as S from "./styles";

type CellProps = {
  children: ReactNode;
};

export const Cell = ({ children }: CellProps) => {
  return <S.Cell>{children}</S.Cell>;
};
