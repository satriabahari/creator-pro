import SubContainer from "@/common/components/elements/SubContainer";
import cn from "@/common/libs/clsxm";
import { FeatureProps } from "@/common/types/feature";
import Image from "next/image";
import React from "react";

const FeatureSection = ({
  id,
  title,
  description,
  image,
  positionGrid,
  aosTitle,
  aosImage,
}: FeatureProps) => {
  return (
    <SubContainer
      className="grid grid-cols-2 items-center gap-16"
      id={`feature-${id}`}
    >
      <div
        className="space-y-4"
        data-aos={aosTitle}
        data-aos-anchor={`#feature-${id}`}
      >
        <h3 className="w-3/4 text-3xl font-semibold leading-tight dark:text-neutral-300">
          {title}
        </h3>
        <p className="dark:text-neutral-400">{description}</p>
      </div>
      {/* <div
        className={cn(
          "rounded-lg bg-gradient-to-br p-0.5 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500",
          positionGrid,
        )}
      > */}
      <div
        className={cn(
          "rounded-lg border-2 bg-gradient-to-b p-4 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900",
          positionGrid,
        )}
        data-aos={aosImage}
        data-aos-delay="300"
        data-aos-anchor={`#feature-${id}`}
      >
        <Image
          src={image}
          width={200}
          height={200}
          alt={title}
          className="h-full w-full rounded-md"
        />
      </div>
      {/* </div> */}
    </SubContainer>
  );
};

export default FeatureSection;
