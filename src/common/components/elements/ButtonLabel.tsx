import React from "react";

interface ButtonLabelProps {
  children: React.ReactNode;
  [propname: string]: React.ReactNode | string | undefined;
}

const ButtonLabel = ({ children, ...others }: ButtonLabelProps) => {
  return (
    <div
      className="w-fit rounded-full border-2 dark:border-neutral-700"
      {...others}
    >
      <button className="rounded-full bg-gradient-to-r px-4 py-1 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-100">
        <span className="text-gradient-color flex items-center gap-1 text-sm font-semibold">
          {children}
        </span>
      </button>
    </div>
  );
};

export default ButtonLabel;
