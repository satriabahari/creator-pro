import { FcGlobe } from "react-icons/fc"; //berwarna
import { FaGlobeAsia as InternationalizationIcon } from "react-icons/fa";
import cn from "@/common/libs/clsxm";

interface LocaleSwitcherProps {
  className?: string;
}

const LocaleSwitcher = ({ className }: LocaleSwitcherProps) => {
  return (
    <button
      className={cn(
        "rounded-lg bg-purple-600/15 p-3 text-purple-600",
        className,
      )}
    >
      <InternationalizationIcon size={16} />
    </button>
  );
};

export default LocaleSwitcher;
