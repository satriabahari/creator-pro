import cn from "@/common/libs/clsxm";
import { useTheme } from "next-themes";
import { FaMoon as DarkIcon, FaSun as LightIcon } from "react-icons/fa";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="rounded-lg bg-gradient-to-br p-0.5 transition duration-300 hover:scale-110 active:scale-90 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500">
      <button
        className={cn(
          "rounded-lg bg-gradient-to-b p-3 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-50",
          className,
        )}
        onClick={toggleTheme}
      >
        {resolvedTheme === "light" ? (
          <LightIcon size={16} />
        ) : (
          <DarkIcon size={16} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
