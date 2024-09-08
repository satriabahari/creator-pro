import MENU_FOOTER from "@/common/constants/menu_footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuList = () => {
  return (
    <div
      className="rounded-2xl bg-gradient-to-br p-0.5 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500"
      data-aos="fade-right"
      data-aos-anchor="#footer"
    >
      <div className="flex h-full flex-col gap-5 rounded-2xl bg-neutral-200 bg-gradient-to-b p-8 dark:from-neutral-800 dark:to-neutral-900">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo/logo.png"
              width={36}
              height={36}
              alt="logo"
            />
            <h2 className="text-lg font-semibold dark:text-neutral-300">
              Content Creators
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-500">
            AI for content creators
          </p>
          <hr className="border-t border-neutral-300" />
        </div>
        <div className="flex justify-between gap-4">
          {MENU_FOOTER.map((item, index) => (
            <div key={index}>
              <h5 className="mb-4 font-medium">{item.title}</h5>
              <ul className="flex flex-col gap-2">
                {item.menus.map((menu, index) => (
                  <Link href="/" key={index}>
                    <li className="dark:text-neutral-400">{menu.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
