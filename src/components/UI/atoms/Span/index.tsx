import { HTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

type SpanProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export const Span = ({ children, ...rest }: SpanProps) => {
  return <S.Span {...rest}>{children}</S.Span>;
};
