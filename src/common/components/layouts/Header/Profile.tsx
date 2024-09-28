import { SiContentstack as LogoIcon } from "react-icons/si";

const Profile = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="rounded-lg bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 p-1.5">
        <LogoIcon size={20} />
      </div>
      <h2 className="font-medium text-neutral-700 dark:text-neutral-300 lg:text-lg">
        CreatorPro
      </h2>
    </div>
  );
};

export default Profile;
