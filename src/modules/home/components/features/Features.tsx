import FeaturesList from "./FeaturesList";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SubContainer from "@/common/components/elements/SubContainer";

const Features = () => {
  return (
    <SubContainer
      id="feature"
      className="space-y-12 overflow-hidden py-2 lg:space-y-16 lg:px-20"
    >
      <SectionHeading
        label="Features?"
        title="Our Key Features"
        description="Enjoy powerful features designed to support and accelerate your growth as a creator."
        data-aos="fade-up"
        data-aos-anchor="#feature"
      />
      <FeaturesList />
    </SubContainer>
  );
};

export default Features;
