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
      className="card-hover h-full space-y-3 rounded-2xl border-2 bg-neutral-200 bg-gradient-to-b p-4 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900"
      {...others}
    >
      <Image
        src={"/images/hero.jpg"}
        width={300}
        height={200}
        alt={title}
        className="w-full rounded-lg"
      />
      <div className="w-fit rounded-full bg-neutral-300 px-4 py-1 text-sm text-neutral-100 dark:bg-neutral-700">
        {category}
      </div>
      <div className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-lg font-medium dark:text-neutral-300">{title}</h3>
          <p className="text-sm dark:text-neutral-500">{description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Image
              src={"/images/hero.jpg"}
              className="rounded-full"
              width={24}
              height={24}
              alt={name}
            />
            <p className="text-sm dark:text-neutral-300">{name}</p>
          </div>
          <span className="text-sm dark:text-neutral-500">
            Jul 07, 2024 | 10 min
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
