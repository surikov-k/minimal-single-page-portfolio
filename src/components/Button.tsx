import { ButtonHTMLAttributes, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "text";
  iconAfter?: ReactNode;
}

export default function Button(props: ButtonProps) {
  const { className, children, variant, iconAfter, ...rest } = props;
  return (
    <button
      className={twMerge(
        "border-red-orange-500 group/button relative inline-flex h-11 items-center gap-2 rounded-xl border px-6 uppercase transition duration-500",
        variant === "primary" && "bg-red-orange-500 text-white",
        variant === "secondary" && "hover:bg-red-orange-500 hover:text-white",
        variant === "text" &&
          "after:bg-red-orange-500 h-auto border-transparent px-0 transition-all after:absolute after:top-full after:h-px after:w-0 after:duration-500 after:content-[''] hover:after:w-full",
        className
      )}
      {...rest}
    >
      {children}
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
}
