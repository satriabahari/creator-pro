import cn from "@/common/libs/clsxm";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className = "", ...others }: ButtonProps) => {
  return (
    <div className="rounded-lg bg-gradient-to-br p-0.5 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500">
      <button
        className={cn(
          "flex items-center gap-2 rounded-lg bg-neutral-300 bg-gradient-to-b px-4 py-2 dark:from-neutral-800 dark:to-neutral-900",
          className,
        )}
        {...others}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
