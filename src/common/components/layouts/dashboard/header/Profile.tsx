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
        className="rounded-full w-8 h-8"
      />
      <div className="flex flex-col ">
        <h5 className="text-neutral-700 font-semibold text-sm">Satria Bahari</h5>
        <span className="text-xs text-neutral-500 font-medium">Web Developer</span>
      </div>
    </div>
  );
};

export default Profile;
