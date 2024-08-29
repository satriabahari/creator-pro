import React from "react";
import BlogList from "./BlogList";

const Blog = () => {
  return (
    <section className="space-y-10">
      <h2 className="text-center text-4xl font-semibold">Content Creator Blog</h2>
      <BlogList />
    </section>
  );
};

export default Blog;
