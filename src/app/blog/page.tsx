import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Blog from "@/modules/blog";
import React from "react";

const BlogPage = () => {
  return (
    <Container className="py-28">
      <PageHeading
        title="My Blogs: Stories and Creators"
        description="Lorem ipsum dolor sit amet consectetur. Elementum amet congue purus scelerisque."
      />
      <Blog />
    </Container>
  );
};

export default BlogPage;
