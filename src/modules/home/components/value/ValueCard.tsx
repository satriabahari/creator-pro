"use client";

import { useState } from "react";

import Card from "@/common/components/elements/Card";

interface ValueCardProps {
  icon: JSX.Element;
  title?: string;
  description?: string;
  [propname: string]: React.ReactNode | string | undefined;
}

const ValueCard = ({ icon, title, description, ...others }: ValueCardProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className={`rounded-2xl p-0.5 transition duration-300 ${isHover && "bg-gradient-color scale-[1.02]"} `}
    >
      <Card
        className="flex h-full flex-col gap-5 rounded-2xl lg:p-8"
        {...others}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`w-fit rounded-lg p-2 ${isHover ? "bg-gradient-color" : "bg-neutral-300 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200"}`}
        >
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
            {title}
          </h3>
          <p className="text-sm text-neutral-500">{description}</p>
        </div>
      </Card>
    </div>
  );
};

export default ValueCard;
