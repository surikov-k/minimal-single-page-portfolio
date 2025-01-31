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
        "border-red-orange-500 inline-flex h-11 items-center gap-2 rounded-xl border px-6 uppercase",
        variant === "primary" && "bg-red-orange-500 text-white",
        variant === "secondary" && "",
        variant === "text" && "h-auto border-transparent px-0",
        className
      )}
      {...rest}
    >
      {children}
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
}
