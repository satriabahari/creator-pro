import BLOG_ITEMS from "@/common/constants/blog";
import React from "react";
import BlogCard from "../../../../common/components/elements/BlogCard";

const BlogList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {BLOG_ITEMS.slice(0, 3).map((blog, index) => (
        <BlogCard
          key={index}
          {...blog}
          data-aos="fade-up"
          data-aos-delay={index * 100 + 300}
          data-aos-anchor="#blog"
        />
      ))}
    </div>
  );
};

export default BlogList;
