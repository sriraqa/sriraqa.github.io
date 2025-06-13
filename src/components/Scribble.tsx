import React, { forwardRef, ComponentPropsWithoutRef } from "react";

const Scribble = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ children, ...props }, ref) => {
    return (
      <div className="font-semibold text-primary">
        <div key={props.key} onClick={props.onClick} ref={ref}>
          {children}
        </div>
      </div>
    );
  }
);

export default Scribble;
