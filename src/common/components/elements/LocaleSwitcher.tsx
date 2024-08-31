import { FcGlobe } from "react-icons/fc"; //berwarna
import { FaGlobeAsia as InternationalizationIcon } from "react-icons/fa";
import cn from "@/common/libs/clsxm";

interface LocaleSwitcherProps {
  className?: string;
}

const LocaleSwitcher = ({ className }: LocaleSwitcherProps) => {
  return (
    <div className="rounded-lg bg-gradient-to-br p-0.5 transition duration-300 hover:scale-110 active:scale-90 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500">
      <button
        className={cn(
          "rounded-lg bg-gradient-to-b p-3 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-50",
          className,
        )}
      >
        <InternationalizationIcon size={16} />
      </button>
    </div>
  );
};

export default LocaleSwitcher;
