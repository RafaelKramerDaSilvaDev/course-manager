import { forwardRef, ReactNode } from "react";

type ClickOutsideContainerProps = {
  children: ReactNode;
};

export const ClickOutsideContainer = forwardRef<
  HTMLDivElement,
  ClickOutsideContainerProps
>(({ children }, ref) => {
  return (
    <div ref={ref} style={{ all: "unset" }}>
      {children}
    </div>
  );
});
