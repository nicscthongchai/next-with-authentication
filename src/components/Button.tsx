import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, ...attr } = props;
  return (
    <button
      {...attr}
      className={twMerge(
        "flex items-center justify-center",
        "uppercase text-sm text-zinc-800 font-bold",
        "bg-zinc-300 rounded-md px-4 h-8",
        className
      )}
    >
      {children}
    </button>
  );
};
