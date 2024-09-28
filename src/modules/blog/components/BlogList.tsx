import BlogCard from "@/common/components/elements/BlogCard";
import BLOG_ITEMS from "@/common/constants/blog";
import React from "react";

const BlogList = () => {
  const filteredBlogs = BLOG_ITEMS.filter((item) => item.isShow);
  return (
    <div id="blogList" className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {filteredBlogs.map((blog, index) => (
        <BlogCard
          key={index}
          {...blog}
          data-aos="fade-up"
          data-aos-delay={index * 100 + 300}
          data-aos-anchor="#blogList"
        />
      ))}
    </div>
  );
};

export default BlogList;
