"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  title: string;
}

const Tooltip = ({ children, title }: TooltipProps) => {
  const [isTooltipVisible, setIsTooltilVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltilVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltilVisible(false);
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="relative">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {isTooltipVisible && (
        <AnimatePresence>
          <motion.div
            className="absolute bottom-full mb-2 rounded bg-neutral-400 px-2 py-1 text-xs font-medium"
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
          >
            {title}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Tooltip;
