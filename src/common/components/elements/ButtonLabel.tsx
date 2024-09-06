import React from "react";

interface ButtonLabelProps {
  children: React.ReactNode;
}

const ButtonLabel = ({ children }: ButtonLabelProps) => {
  return (
    <div className="border-gradient rounded-full w-fit">
      <button className="border-body-content flex items-center gap-1 rounded-full bg-gradient-to-r px-4 py-1 text-sm dark:from-neutral-700 dark:to-neutral-800 dark:text-neutral-100">
        {children}
      </button>
    </div>
  );
};

export default ButtonLabel;
