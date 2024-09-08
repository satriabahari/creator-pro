import React from "react";
import TestimonialList from "./TestimonialList";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SubContainer from "@/common/components/elements/SubContainer";

const Testimonial = () => {
  return (
    <SubContainer className="space-y-10">
      <SectionHeading title="What Are People Say" data-aos="fade-up" />
      <TestimonialList />
    </SubContainer>
  );
};

export default Testimonial;
