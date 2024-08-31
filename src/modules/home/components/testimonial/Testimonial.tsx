import React from "react";
import TestimonialList from "./TestimonialList";
import SectionHeading from "@/common/components/elements/SectionHeading";

const Testimonial = () => {
  return (
    <section className="space-y-10">
      <SectionHeading title="What Are People Say" />
      <TestimonialList />
    </section>
  );
};

export default Testimonial;
