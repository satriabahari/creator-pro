import FEATURE_ITEMS from "@/common/constants/features";
import React from "react";
import FeatureSection from "./FeatureSection";

const FeaturesList = () => {
  const filteredFeatures = FEATURE_ITEMS.filter((feature) => feature.isShow);
  return (
    <div className="space-y-32">
      {filteredFeatures.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesList;
