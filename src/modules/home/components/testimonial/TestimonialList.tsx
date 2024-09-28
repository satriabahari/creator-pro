import TestimonialCard from "./TestimonialCard";

import TESTIMONIAL_ITEMS from "@/common/constants/testimonial";
import MarqueeElement from "@/common/components/elements/MarqueeElement";

const TestimonialList = () => {
  const filteredTestimonials = TESTIMONIAL_ITEMS.filter((item) => item.isShow);
  return (
    <MarqueeElement>
      {filteredTestimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </MarqueeElement>
  );
};

export default TestimonialList;
