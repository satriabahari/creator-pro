import { FcGlobe } from "react-icons/fc"; //berwarna
import { FaGlobeAsia as InternationalizationIcon } from "react-icons/fa";

const LocaleSwitcher = () => {
  return (
    <button className="rounded-lg bg-purple-600/15 text-purple-600 p-3">
      <InternationalizationIcon size={16}/>
    </button>
  );
};

export default LocaleSwitcher;
