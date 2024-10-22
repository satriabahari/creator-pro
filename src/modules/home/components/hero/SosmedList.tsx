import cn from "@/common/libs/clsxm";
import Tooltip from "@/common/components/elements/Tooltip";
import SOSMED_ITEMS from "@/common/constants/sosmed";
import { SosmedItemProps } from "@/common/types/sosmed";

const SosmedItem = ({ title, icon, className, ...others }: SosmedItemProps) => {
  return (
    <Tooltip title={title}>
      <div
        className={cn(
          "rounded-full bg-neutral-300 p-1.5 transition duration-300 hover:scale-[1.2] md:p-2 lg:p-2.5",
          className,
        )}
        {...others}
      >
        {icon}
      </div>
    </Tooltip>
  );
};

const SosmedList = () => {
  const filteredSosmeds = SOSMED_ITEMS.filter((item) => item.isShow);
  return (
    <div className="flex items-center gap-2 md:gap-3">
      {filteredSosmeds.map((sosmed, index) => (
        <SosmedItem
          key={index}
          icon={sosmed.icon}
          title={sosmed.title}
          className={sosmed.className}
          data-aos="fade-up"
          data-aos-delay={index * 100 + 200}
          data-aos-anchor="#hero"
        />
      ))}
    </div>
  );
};

export default SosmedList;
