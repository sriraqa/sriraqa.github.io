import React, { forwardRef, ComponentPropsWithoutRef } from "react";

import "../css/Button.css";

const Button = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  return (
    <div 
      key={props.key}
      onClick={props.onClick}
      ref={ref}
      className="bg-primary-pattern bg-[length:560px] bg-repeat w-full"
    >
      <div className="button border-[2.5px] px-12 py-8 cursor-pointer bg-background">
        {children}
      </div>
    </div>
  );
});

export default Button;