import React, { forwardRef, ComponentPropsWithoutRef } from "react";

import "../css/Button.css";

const Button = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  return (
    <div className="bg-primary-pattern bg-[length:560px] bg-repeat max-w-[812px] w-full">
      <div className="button py-6 px-8 cursor-pointer bg-background">
        {children}
      </div>
    </div>
  );
});

export default Button;