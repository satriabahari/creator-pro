import cn from "@/common/libs/clsxm";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn("rounded-2xl bg-neutral-200 p-4", className)}>
      {children}
    </div>
  );
};

export default Card;
