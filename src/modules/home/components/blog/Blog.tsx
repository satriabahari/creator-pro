import React from "react";
import BlogList from "./BlogList";
import SectionHeading from "@/common/components/elements/SectionHeading";
import Button from "@/common/components/elements/Button";
import Link from "next/link";
import SubContainer from "@/common/components/elements/SubContainer";

const Blog = () => {
  return (
    <SubContainer className="flex flex-col items-center gap-10" id="blog">
      <SectionHeading
        title="Content Creator Blog"
        data-aos="fade-up"
        data-aos-anchor="#blog"
      />
      <BlogList />
      <Button data-aos="fade-up" data-aos-delay="600" data-aos-anchor="#blog">
        <Link href="/blog">Read More</Link>
      </Button>
    </SubContainer>
  );
};

export default Blog;
