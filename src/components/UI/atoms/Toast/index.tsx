import { ToastTypes } from "../../../../contexts/useToastContext";
import * as S from "./styles";

type ToastProps = {
  message: string;
  duration?: number;
  type?: ToastTypes;
};

// TODO: Fazer efeito com a duração do Toast

export const Toast = ({ message }: ToastProps) => {
  return (
    <S.Toast>
      <S.Message>{message}</S.Message>
    </S.Toast>
  );
};
