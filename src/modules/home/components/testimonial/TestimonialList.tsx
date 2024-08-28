import TESTIMONIAL_ITEMS from "@/common/constants/testimonial";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = () => {
  const filteredTestimonials = TESTIMONIAL_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredTestimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialList;
