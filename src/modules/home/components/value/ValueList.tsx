import VALUE_ITEMS from "@/common/constants/value";
import React from "react";
import ValueCard from "./ValueCard";

const ValueList = () => {
  const filteredValues = VALUE_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredValues.map((value, index) => (
        <ValueCard
          key={index}
          icon={value.icon}
          title={value.title}
          description={value.description}
        />
      ))}
    </div>
  );
};

export default ValueList;