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
        "rounded-lg border-2 border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 p-2 transition duration-300 hover:scale-110 active:scale-100 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-50",
        className,
      )}
    >
      <InternationalizationIcon size={16} />
    </button>
  );
};

export default LocaleSwitcher;
