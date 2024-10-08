import React, { forwardRef, ComponentPropsWithoutRef } from "react";

const Scribble = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  return (
    <div className="bg-scribble bg-left-bottom bg-contain bg-no-repeat">
      <span 
        key={props.key}
        onClick={props.onClick}
        ref={ref}
      >
        {children}
      </span>
    </div>
  );
});

export default Scribble;