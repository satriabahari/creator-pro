import cn from "@/common/libs/clsxm";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn("rounded-2xl bg-neutral-200 bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900 border-2 dark:border-neutral-700 p-4", className)}>
      {children}
    </div>
  );
};

export default Card;
