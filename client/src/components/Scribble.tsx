import React, { forwardRef, ComponentPropsWithoutRef } from "react";

const Scribble = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  return (
    <div className="bg-scribble bg-left-bottom bg-contain bg-no-repeat">
      <p 
        key={props.key}
        onClick={props.onClick}
        ref={ref}
      >
        {children}
      </p>
    </div>
  );
});

export default Scribble;