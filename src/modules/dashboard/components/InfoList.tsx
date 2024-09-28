import InfoCard from "./InfoCard";

import INFO_ITEMS from "@/common/constants/info";

const InfoList = () => {
  const filteredItems = INFO_ITEMS.filter((item) => item.isShow);
  return (
    <>
      {filteredItems.map((item, index) => (
        <InfoCard
          key={index}
          {...item}
          data-aos="fade-down"
          data-aos-delay={index * 100 + 300}
          data-aos-anchor="#dashboard"
        />
      ))}
    </>
  );
};

export default InfoList;
