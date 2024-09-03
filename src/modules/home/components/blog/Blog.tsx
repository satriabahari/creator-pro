import React from "react";
import BlogList from "./BlogList";
import SectionHeading from "@/common/components/elements/SectionHeading";
import Button from "@/common/components/elements/Button";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="flex flex-col items-center gap-10">
      <SectionHeading title="Content Creator Blog" />
      <BlogList />
      <Button>
        <Link href="/blog">Read More</Link>
      </Button>
    </section>
  );
};

export default Blog;
