import FaqCard from "./FaqCard";

import FAQ_ITEMS from "@/common/constants/faq";

const FaqList = () => {
  const filteredFaq = FAQ_ITEMS.filter((item) => item.isShow);
  return (
    <div className="flex flex-col gap-4">
      {filteredFaq.map((item, index) => (
        <FaqCard
          key={index}
          {...item}
          data-aos="fade-up"
          data-aos-delay={index * 150 + 300}
          data-aos-anchor="#faq"
        />
      ))}
    </div>
  );
};

export default FaqList;
