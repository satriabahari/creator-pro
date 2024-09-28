import ValueCard from "./ValueCard";

import VALUE_ITEMS from "@/common/constants/value";

const ValueList = () => {
  const filteredValues = VALUE_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
