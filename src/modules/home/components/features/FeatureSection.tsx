import cn from "@/common/libs/clsxm";
import { FeatureProps } from "@/common/types/feature";
import Image from "next/image";
import React from "react";

const FeatureSection = ({
  title,
  description,
  image,
  positionGrid,
}: FeatureProps) => {
  return (
    <div className="grid grid-cols-2 gap-16 items-center">
      <div className="space-y-4">
        <h3 className="text-3xl font-semibold leading-tight dark:text-neutral-300 w-3/4">{title}</h3>
        <p className="dark:text-neutral-400">{description}</p>
      </div>
      <div
        className={cn(
          "rounded-lg bg-gradient-to-br p-0.5 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500",
          positionGrid,
        )}
      >
        <div className="rounded-lg bg-gradient-to-b p-4 dark:from-neutral-800 dark:to-neutral-900">
          <Image
            src={image}
            width={200}
            height={200}
            alt={title}
            className="h-full w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
