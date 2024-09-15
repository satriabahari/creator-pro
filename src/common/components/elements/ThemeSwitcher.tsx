"use client";

import cn from "@/common/libs/clsxm";
import { useTheme } from "next-themes";
import { FaMoon as DarkIcon, FaSun as LightIcon } from "react-icons/fa";

interface ThemeSwitcherProps {
  className?: string;
  [propname: string]: React.ReactNode | string | undefined;
}

const ThemeSwitcher = ({ className, ...others }: ThemeSwitcherProps) => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <button
      className={cn(
        "rounded-lg border-2 bg-gradient-to-b p-2 transition duration-300 hover:scale-110 active:scale-100 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-50",
        className,
      )}
      {...others}
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? (
        <LightIcon size={16} />
      ) : (
        <DarkIcon size={16} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
