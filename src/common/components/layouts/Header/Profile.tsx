import Image from "next/image";
import React from "react";
import { SiContentstack as LogoIcon } from "react-icons/si";

const Profile = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="rounded-lg bg-gradient-to-br p-1.5 dark:from-purple-400 dark:via-pink-400 dark:to-yellow-400">
        {/* <Image src="/images/logo/logo.png" width={20} height={20} alt="logo" /> */}
        <LogoIcon size={20} />
      </div>
      <h2 className="text-lg font-medium text-neutral-300">Content Creators</h2>
    </div>
  );
};

export default Profile;
