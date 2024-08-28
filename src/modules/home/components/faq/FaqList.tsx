import FAQ_ITEMS from "@/common/constants/faq";
import React from "react";
import FaqCard from "./FaqCard";

const FaqList = () => {
  const filteredFaq = FAQ_ITEMS.filter((item) => item.isShow);
  return (
    <div className="flex flex-col gap-4">
      {filteredFaq.map((item, index) => (
        <FaqCard key={index} {...item} />
      ))}
    </div>
  );
};

export default FaqList;
