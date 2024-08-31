import Tooltip from "@/common/components/elements/Tooltip";
import SOSMED_ITEMS from "@/common/constants/sosmed";
import cn from "@/common/libs/clsxm";
import { SosmedItemProps } from "@/common/types/sosmed";
import React from "react";

const SosmedItem = ({ title, icon, className }: SosmedItemProps) => {
  return (
    <Tooltip title={title}>
      <div className={cn("rounded-full bg-neutral-300 p-2.5 hover:scale-[1.2] transition duration-300", className)}>
        {icon}
      </div>
    </Tooltip>
  );
};

const SosmedList = () => {
  const filteredSosmeds = SOSMED_ITEMS.filter((item) => item.isShow);
  return (
    <div className="flex items-center gap-3">
      {filteredSosmeds.map((sosmed, index) => (
        <SosmedItem
          key={index}
          icon={sosmed.icon}
          title={sosmed.title}
          className={sosmed.className}
        />
      ))}
    </div>
  );
};

export default SosmedList;
