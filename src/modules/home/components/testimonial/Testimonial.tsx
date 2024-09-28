import React from "react";
import TestimonialList from "./TestimonialList";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SubContainer from "@/common/components/elements/SubContainer";

const Testimonial = () => {
  return (
    <SubContainer className="space-y-12 lg:space-y-16">
      <SectionHeading
        title="What Our Creators Say"
        label="Real Voices, Real Impact"
        // description="Discover how our platform has empowered content creators through their personal success stories."
        description="Hear success stories from creators who have used CreatePro to scale their work."
        data-aos="fade-up"
      />
      <TestimonialList />
    </SubContainer>
  );
};

export default Testimonial;
