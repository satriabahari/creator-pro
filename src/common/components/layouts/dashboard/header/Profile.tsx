import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        width={16}
        height={16}
        src="/images/hero.jpg"
        alt="Image Profile"
        className="h-8 w-8 rounded-full"
      />
      <div className="flex flex-col">
        <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          Satria Bahari
        </h5>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          Web Developer
        </span>
      </div>
    </div>
  );
};

export default Profile;
