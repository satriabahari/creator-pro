"use client";

import Image from "next/image";
import { useState } from "react";

import Card from "./Card";

import { BlogProps } from "@/common/types/blog";

const BlogCard = ({
  title,
  description,
  image,
  category,
  imageProfile,
  name,
  date,
  ...others
}: BlogProps) => {
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
        className="card-hover h-full overflow-hidden rounded-2xl border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 p-2 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 lg:p-4"
        {...others}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={image}
          width={300}
          height={200}
          alt={title}
          className="h-[350px] w-full rounded-lg md:h-[150px] md:w-[300px]"
        />
        <div className="px-2 py-4">
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-1">
              <div className="mb-2 w-fit rounded-full bg-neutral-300 px-4 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
                {category}
              </div>
              <h3 className="font-semibold text-neutral-700 dark:text-neutral-300">
                {title}
              </h3>
              <p className="text-sm text-neutral-500">{description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={imageProfile}
                className="h-8 w-8 rounded-full"
                width={24}
                height={24}
                alt={name}
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {name}
                </p>
                <span className="text-xs text-neutral-500">Jul 07, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
