import cn from "@/common/libs/clsxm";
import { FaMoon as DarkIcon, FaSun as LightIcon } from "react-icons/fa";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  return (
    <button
      className={cn(
        "rounded-lg bg-purple-600/15 p-3 text-purple-600",
        className,
      )}
    >
      <DarkIcon size={16} />
    </button>
  );
};

export default ThemeSwitcher;
