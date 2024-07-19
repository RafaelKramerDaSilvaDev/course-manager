import { ReactNode } from "react";
import * as S from "./styles";

type HeaderCellProps = {
  children: ReactNode;
};

export const HeaderCell = ({ children }: HeaderCellProps) => {
  return <S.HeaderCell>{children}</S.HeaderCell>;
};
