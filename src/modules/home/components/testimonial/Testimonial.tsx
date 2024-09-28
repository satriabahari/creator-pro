import TestimonialList from "./TestimonialList";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SubContainer from "@/common/components/elements/SubContainer";

const Testimonial = () => {
  return (
    <SubContainer className="space-y-12 lg:space-y-16">
      <SectionHeading
        title="What Our Creators Say"
        label="Real Voices, Real Impact"
        description="Hear success stories from creators who have used CreatePro to scale their work."
        data-aos="fade-up"
      />
      <TestimonialList />
    </SubContainer>
  );
};

export default Testimonial;
