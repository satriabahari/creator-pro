"use client";

import { FaqProps } from "@/common/types/faq";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FaqCard = ({ question, answer }: FaqProps) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-neutral-300 bg-gradient-to-b p-6 dark:from-neutral-700 dark:to-neutral-800">
      <div className="flex items-center justify-between">
        <p className="font-medium">{question}</p>
        <button onClick={() => setIsShow(!isShow)}>
          <FaPlus size={16} />
        </button>
      </div>
      {isShow && <p>{answer}</p>}
    </div>
  );
};

export default FaqCard;
