import React from "react";
import BlogList from "./BlogList";
import Pagination from "./Pagination";

const Blog = () => {
  return (
    <div>
      <div className="my-28">
        <h4 className="font-medium mb-4">All Blog Posts</h4>
        <BlogList />
      </div>
      <Pagination/>
    </div>
  );
};

export default Blog;
