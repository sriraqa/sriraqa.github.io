import { forwardRef, ComponentPropsWithoutRef } from "react";

import "../css/Button.css";

const SmallButton = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ children, ...props }, ref) => {
    return (
      <div
        key={props.key}
        onClick={props.onClick}
        ref={ref}
        className="bg-primary-pattern bg-[length:560px] bg-repeat w-full"
      >
        <div className="small-button border-[2.5px] py-3 px-4 cursor-pointer bg-background">
          {children}
        </div>
      </div>
    );
  }
);

export default SmallButton;
