"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown as ArrowIcon } from "react-icons/io";

import { FaqProps } from "@/common/types/faq";

const FaqCard = ({ question, answer, ...others }: FaqProps) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className="flex flex-col gap-4 rounded-2xl bg-gradient-to-b from-neutral-300 to-neutral-200 p-6 dark:from-neutral-700 dark:to-neutral-800"
      {...others}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium lg:text-base">{question}</p>
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
            className="text-sm lg:text-base"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqCard;
