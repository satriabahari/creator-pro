import BlogCard from "@/common/components/elements/BlogCard";
import BLOG_ITEMS from "@/common/constants/blog";
import React from "react";

const BlogList = () => {
  const filteredBlogs = BLOG_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
      {filteredBlogs.map((blog, index) => (
        <BlogCard
          key={index}
          {...blog}
          data-aos="fade-up"
          data-aos-delay={index * 100 + 300}
        />
      ))}
    </div>
  );
};

export default BlogList;
