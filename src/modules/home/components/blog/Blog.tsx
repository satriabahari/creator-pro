import React from "react";
import BlogList from "./BlogList";
import SectionHeading from "@/common/components/elements/SectionHeading";

const Blog = () => {
  return (
    <section className="space-y-10">
      <SectionHeading title="Content Creator Blog" />
      <BlogList />
    </section>
  );
};

export default Blog;
