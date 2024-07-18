import { useState } from "react";

export const useToggle = (initialOpen?: boolean) => {
  const [open, setOpen] = useState(initialOpen ?? false);

  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return { open, toggle };
};
