import cn from "@/common/libs/clsxm";
import React from "react";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className, ...others }) => {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 p-4 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900",
        className,
      )}
      {...others}
    >
      {children}
    </div>
  );
};

export default Card;
