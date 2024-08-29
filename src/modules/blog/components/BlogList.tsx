import BlogCard from "@/common/components/elements/BlogCard";
import BLOG_ITEMS from "@/common/constants/blog";
import React from "react";

const BlogList = () => {
  const filteredBlogs = BLOG_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-4 gap-4">
      {filteredBlogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
