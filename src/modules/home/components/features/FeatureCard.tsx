"use client";

import Card from "@/common/components/elements/Card";
import SubContainer from "@/common/components/elements/SubContainer";
import cn from "@/common/libs/clsxm";
import { FeatureProps } from "@/common/types/feature";
import Image from "next/image";
import React, { useState } from "react";

const FeatureCard = ({
  id,
  title,
  description,
  image,
  positionGrid,
  aosTitle,
  aosImage,
  colSpan,
  className,
  ...others
}: FeatureProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className={`rounded-2xl p-0.5 transition duration-300 md:first:col-span-2 lg:first:col-span-3 ${isHover && "bg-gradient-color scale-[1.02]"} ${colSpan}`}
    >
      <Card
        className={`relative flex h-full flex-col items-center gap-4 bg-gradient-to-b p-6 dark:from-neutral-800 dark:to-neutral-900`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...others}
      >
        <div className={`relative`}>
          <div className="absolute inset-0 h-full w-full rounded-md bg-gradient-to-b from-neutral-200/10 to-neutral-200 dark:from-[#202020]/10 dark:to-[#202020]"></div>
          <Image
            src={image}
            width={300}
            height={300}
            alt={title}
            className={className}
          />
        </div>

        <div
          className="order-1 flex flex-col space-y-1"
          data-aos={aosTitle}
          data-aos-anchor={`#feature-${id}`}
        >
          <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
            {title}
          </h3>
          <p className="text-neutral-500">{description}</p>
        </div>
      </Card>
    </div>
  );
};

export default FeatureCard;
