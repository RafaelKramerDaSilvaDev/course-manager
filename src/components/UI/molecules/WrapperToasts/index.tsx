import { ToastProps } from "../../../../contexts/useToastContext";
import { Toast } from "../../atoms/Toast";
import * as S from "./styles";

type WrapperToastsProps = {
  toasts: ToastProps[];
};

export const WrapperToasts = ({ toasts }: WrapperToastsProps) => {
  return (
    <S.WrapperToasts>
      {toasts?.map(({ toastKey, message, duration, type }) => (
        <Toast
          key={toastKey}
          message={message}
          duration={duration}
          type={type}
        />
      ))}
    </S.WrapperToasts>
  );
};
