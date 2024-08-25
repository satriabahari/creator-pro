import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Image src="/images/logo/logo.png" width={36} height={36} alt="logo" />
      <h2 className="text-xl font-bold text-purple-600">Content Creators</h2>
    </div>
  );
};

export default Profile;
