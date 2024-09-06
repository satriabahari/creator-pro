import cn from "@/common/libs/clsxm";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className = "", ...others }: ButtonProps) => {
  return (
    // <div className="w-fit rounded-lg bg-gradient-to-br p-0.5 transition duration-300 hover:scale-105 active:scale-90 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500">
    <button
      className={cn(
        "flex items-center gap-2 rounded-lg bg-neutral-300 px-4 transition duration-300 hover:scale-110 active:scale-100",
        className,
      )}
      {...others}
    >
      {children}
    </button>
    // </div>
  );
};

export default Button;
