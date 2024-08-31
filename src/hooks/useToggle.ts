import { useState } from "react";

export const useToggle = (initialState: boolean) => {
  const [open, setOpen] = useState(initialState);

  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleOn = () => {
    setOpen(true);
  };

  const toggleOff = () => {
    setOpen(false);
  };

  return { open, toggle, toggleOn, toggleOff };
};
