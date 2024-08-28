import MENU_FOOTER from "@/common/constants/menu_footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuList = () => {
  return (
    <div className="flex flex-col rounded-2xl bg-neutral-200 p-8 gap-5">
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo/logo.png"
            width={36}
            height={36}
            alt="logo"
          />
          <h2 className="text-xl font-bold text-purple-600">
            Content Creators
          </h2>
        </div>
        <p className="text-neutral-600">AI for content creators</p>
        <hr className="border-t border-neutral-300" />
      </div>
      <div className="flex justify-between gap-4">
        {MENU_FOOTER.map((item, index) => (
          <div key={index}>
            <h5 className="font-medium mb-4">{item.title}</h5>
            <ul className="flex flex-col gap-2">
              {item.menus.map((menu, index) => (
                <Link href="/" key={index}>
                  <li>{menu.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
