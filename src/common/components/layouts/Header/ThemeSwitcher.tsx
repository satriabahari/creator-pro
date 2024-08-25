import { FaMoon as DarkIcon, FaSun as LightIcon } from "react-icons/fa";
const ThemeSwitcher = () => {
  return (
    <button className="rounded-lg bg-purple-600/15 p-3 text-purple-600">
      <DarkIcon size={16} />
    </button>
  );
};

export default ThemeSwitcher;
