"use client";

import { useState } from "react";

import CategoryItem from "./CategoryItem";

import CATEGORY_BLOG_ITEMS from "@/common/constants/categoryBlog";

const CategoryList = () => {
  const filteredCategories = CATEGORY_BLOG_ITEMS.filter((item) => item.isShow);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex gap-4 overflow-x-auto">
      {filteredCategories.map((category, index) => (
        <CategoryItem
          isActive={activeIndex === index}
          key={index}
          index={index}
          bgColor={category.bgColor}
          handleClick={handleClick}
        >
          {category.title}
        </CategoryItem>
      ))}
    </div>
  );
};

export default CategoryList;
