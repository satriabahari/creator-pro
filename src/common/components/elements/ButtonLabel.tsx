import React from "react";

interface ButtonLabelProps {
  children: React.ReactNode;
  [propname: string]: React.ReactNode | string | undefined;
}

const ButtonLabel = ({ children, ...others }: ButtonLabelProps) => {
  return (
    <div
      className="w-fit rounded-full border-2 border-neutral-300 dark:border-neutral-700"
      {...others}
    >
      <button className="rounded-full bg-gradient-to-r from-neutral-200 to-neutral-100 px-4 py-1 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-100">
        <div className="flex items-center gap-1 lg:text-sm text-xs font-semibold">
          {children}
        </div>
      </button>
    </div>
  );
};

export default ButtonLabel;
