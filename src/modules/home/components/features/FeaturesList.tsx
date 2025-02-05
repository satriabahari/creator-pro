import FeatureSection from "./FeatureCard";

import FEATURE_ITEMS from "@/common/constants/features";

const FeaturesList = () => {
  const filteredFeatures = FEATURE_ITEMS.filter((feature) => feature.isShow);
  return (
    <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-4 lg:grid-cols-6 lg:gap-4">
      {filteredFeatures.map((feature, index) => (
        <FeatureSection
          key={index}
          {...feature}
          data-aos={feature.aosType}
          data-aos-delay={index * 100 + 300}
          data-aos-anchor="#feature"
        />
      ))}
    </div>
  );
};

export default FeaturesList;
