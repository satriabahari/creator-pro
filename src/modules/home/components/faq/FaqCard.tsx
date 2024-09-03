"use client";

import { FaqProps } from "@/common/types/faq";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowDown as ArrowIcon } from "react-icons/io";

const FaqCard = ({ question, answer }: FaqProps) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-neutral-300 bg-gradient-to-b p-6 dark:from-neutral-700 dark:to-neutral-800">
      <div className="flex items-center justify-between">
        <p className="font-medium">{question}</p>
        <button onClick={() => setIsShow(!isShow)}>
          <ArrowIcon
            size={16}
            className={`transition duration-500 ${isShow ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isShow && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqCard;
