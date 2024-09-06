import React from "react";
import BlogList from "./BlogList";
import SectionHeading from "@/common/components/elements/SectionHeading";
import Button from "@/common/components/elements/Button";
import Link from "next/link";
import SubContainer from "@/common/components/elements/SubContainer";

const Blog = () => {
  return (
    <SubContainer
      className="flex flex-col items-center gap-10"
      data-aos="fade-up"
    >
      <SectionHeading title="Content Creator Blog" />
      <BlogList />
      <Button>
        <Link href="/blog">Read More</Link>
      </Button>
    </SubContainer>
  );
};

export default Blog;
