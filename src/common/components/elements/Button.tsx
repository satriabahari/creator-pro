import { ButtonHTMLAttributes } from "react";

import cn from "@/common/libs/clsxm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className = "", ...others }: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-lg border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 px-4 py-1 font-medium text-neutral-50 transition duration-300 hover:scale-110 active:scale-100 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900",
        className,
      )}
      {...others}
    >
      <div className="text-gradient-color flex items-center justify-center gap-2 text-sm lg:text-base">
        {children}
      </div>
    </button>

    // </div>
  );
};

export default Button;
