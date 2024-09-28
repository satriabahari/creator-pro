import React from "react";
import BlogList from "./BlogList";
import SectionHeading from "@/common/components/elements/SectionHeading";
import Button from "@/common/components/elements/Button";
import Link from "next/link";
import SubContainer from "@/common/components/elements/SubContainer";

const Blog = () => {
  return (
    <SubContainer
      id="blog"
      className="flex flex-col items-center space-y-12 lg:space-y-16"
    >
      <SectionHeading
        title="Latest Insights"
        label="Creator Blog"
        description="Tips, trends, and stories from the world of content creation."
        // description="Read articles, guides, and interviews with successful creators for inspiration."
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
