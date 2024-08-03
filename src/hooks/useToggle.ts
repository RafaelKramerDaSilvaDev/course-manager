import { useState } from "react";

export const useToggle = (initialState?: boolean) => {
  const [state, setState] = useState(initialState ?? false);

  const toggle = () => {
    setState((prevState) => !prevState);
  };

  const toggleOn = () => {
    setState(true);
  };

  const toggleOff = () => {
    setState(false);
  };

  return { state, toggle, toggleOn, toggleOff };
};
