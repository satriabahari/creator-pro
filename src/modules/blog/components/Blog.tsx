import React from "react";

import BlogList from "./BlogList";
import Pagination from "./Pagination";
import LatestPost from "./LatestPost";
import CategoryList from "./CategoryList";

const Blog = () => {
  return (
    <div className="mt-28">
      <LatestPost />
      <div className="my-14 space-y-6 lg:my-28">
        <CategoryList />
        <BlogList />
      </div>
      <Pagination />
    </div>
  );
};

export default Blog;
