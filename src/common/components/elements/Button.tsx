import cn from "@/common/libs/clsxm";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className = "", ...others }: ButtonProps) => {
  return (
    <button className={cn("rounded-lg px-4 py-2 bg-neutral-300", className)} {...others}>
      {children}
    </button>
  );
};

export default Button;
