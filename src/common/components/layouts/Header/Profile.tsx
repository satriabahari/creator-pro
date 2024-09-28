import Image from "next/image";
import React from "react";
import { SiContentstack as LogoIcon } from "react-icons/si";

const Profile = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="rounded-lg bg-gradient-to-br p-1.5 from-purple-400 via-pink-400 to-yellow-400">
        {/* <Image src="/images/logo/logo.png" width={20} height={20} alt="logo" /> */}
        <LogoIcon size={20} />
      </div>
      <h2 className="font-medium text-neutral-700 dark:text-neutral-300 lg:text-lg">
        CreatorPro
      </h2>
    </div>
  );
};

export default Profile;
