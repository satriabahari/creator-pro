import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="bg-gradient-to-br dark:from-purple-400 dark:via-pink-400 dark:to-yellow-400 p-1.5 rounded-lg">
        <Image src="/images/logo/logo.png" width={20} height={20} alt="logo" />
      </div>
      <h2 className="text-lg font-medium text-neutral-300">Content Creators</h2>
    </div>
  );
};

export default Profile;
