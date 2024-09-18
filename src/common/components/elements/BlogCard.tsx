import { BlogProps } from "@/common/types/blog";
import Image from "next/image";
import { Stringifier } from "postcss";
import React from "react";

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
  return (
    <div
      className="card-hover h-full overflow-hidden rounded-2xl border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
      {...others}
    >
      <Image
        src={"/images/hero.jpg"}
        width={300}
        height={200}
        alt={title}
        className="w-full"
      />
      <div className="p-4">
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="mb-2 w-fit rounded-full bg-neutral-300 px-4 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
              {category}
            </div>
            <h3 className="font-semibold text-neutral-700 dark:text-neutral-300">
              {title}
            </h3>
            <p className="text-sm text-neutral-500">{description}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={"/images/hero.jpg"}
              className="h-6 w-6 rounded-full"
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
    </div>
  );
};

export default BlogCard;
