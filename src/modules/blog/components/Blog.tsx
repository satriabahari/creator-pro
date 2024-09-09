import React from "react";
import BlogList from "./BlogList";
import Pagination from "./Pagination";

const Blog = () => {
  return (
    <>
      <div className="my-28">
        <h4 className="mb-4 font-medium text-lg" data-aos="fade-down" data-aos-delay="100">
          All Blog Posts
        </h4>
        <BlogList />
      </div>
      <Pagination />
    </>
  );
};

export default Blog;
