import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { WrapperToasts } from "../components/UI/molecules/WrapperToasts";

export type ToastTypes = "success" | "warning" | "info" | "danger";

export type ToastProps = {
  toastKey: string;
  message: string;
  type?: ToastTypes;
  duration?: number;
};

type ToastContextProps = {
  dispatchToast: (
    message: string,
    options?: { type?: ToastTypes; duration?: number }
  ) => void;
};

const ToastContext = createContext({} as ToastContextProps);

const TOAST_DEFAULT_TYPE: ToastTypes = "success";
const TOAST_DEFAULT_DURATION: number = 3000;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const dispatchToast = (
    message: string,
    options?: { type?: ToastTypes; duration?: number }
  ) => {
    const toastKey = uuidv4();
    const type = options?.type ?? TOAST_DEFAULT_TYPE;
    const duration = options?.duration ?? TOAST_DEFAULT_DURATION;

    setToasts((prevToasts) => [
      ...prevToasts,
      { toastKey, message, type, duration },
    ]);

    setTimeout(() => {
      removeToast(toastKey);
    }, duration);
  };

  const removeToast = (removeKey: string) => {
    setToasts((prevToasts) => {
      return prevToasts.filter(({ toastKey }) => toastKey !== removeKey);
    });
  };

  return (
    <ToastContext.Provider value={{ dispatchToast }}>
      <WrapperToasts toasts={toasts} />

      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  return useContext(ToastContext);
};
