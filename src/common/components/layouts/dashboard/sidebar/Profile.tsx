import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image src="/images/logo/logo.png" width={24} height={24} alt="logo" />
      <h2 className="font-bold text-purple-600">Content Creators</h2>
    </div>
  );
};

export default Profile;
