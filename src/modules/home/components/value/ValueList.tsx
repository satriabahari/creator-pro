import VALUE_ITEMS from "@/common/constants/value";
import React from "react";
import ValueCard from "./ValueCard";

const ValueList = () => {
  const filteredValues = VALUE_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {filteredValues.map((value, index) => (
        <ValueCard
          key={index}
          {...value}
          data-aos="fade-up"
          data-aos-delay={index * 100 + 300}
          data-aos-anchor="#value"
        />
      ))}
    </div>
  );
};

export default ValueList;
