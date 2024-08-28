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
}: BlogProps) => {
  return (
    <div className="bg-neutral-200 rounded-2xl p-4 space-y-2">
      <Image src={"/images/hero.jpg"} width={300} height={200} alt={title} className="rounded-lg"/>
      <div className="bg-neutral-300 rounded-full w-fit py-1 px-4 text-sm">{category}</div>
      <div className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm">{description}</p>
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
            <p className="text-sm">{name}</p>
          </div>
          <span className="text-sm">Jul 07, 2024 | 10 min</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
