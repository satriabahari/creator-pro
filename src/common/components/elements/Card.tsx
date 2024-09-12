import cn from "@/common/libs/clsxm";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  [propname: string]: React.ReactNode | string | undefined;
}

const Card = ({ children, className, ...others }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 bg-neutral-200 bg-gradient-to-b p-4 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900",
        className,
      )}
      {...others}
    >
      {children}
    </div>
  );
};

export default Card;
