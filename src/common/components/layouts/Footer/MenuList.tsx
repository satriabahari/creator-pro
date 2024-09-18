import MENU_FOOTER from "@/common/constants/menu_footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiContentstack as LogoIcon } from "react-icons/si";

const MenuList = () => {
  return (
    <div
      className="rounded-2xl p-0.5"
      // className="rounded-2xl bg-gradient-to-br p-0.5 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500"
      data-aos="fade-right"
      data-aos-anchor="#footer"
    >
      <div className="flex h-full flex-col gap-5 rounded-2xl bg-gradient-to-b from-neutral-200 to-neutral-100 p-8 dark:from-neutral-800 dark:to-neutral-900">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            {/* <Image
              src="/images/logo/logo.png"
              width={36}
              height={36}
              alt="logo"
            /> */}
            <LogoIcon size={36} />
            <h2 className="lg:text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              Content Creators
            </h2>
          </div>
          <p className="text-neutral-500 text-sm lg:text-base">AI for content creators</p>
          <hr className="border-t border-neutral-700 dark:border-neutral-300" />
        </div>
        <div className="flex justify-between gap-4">
          {MENU_FOOTER.map((item, index) => (
            <div key={index}>
              <h5 className="mb-4 text-sm lg:text-base font-medium text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h5>
              <ul className="flex flex-col gap-2">
                {item.menus.map((menu, index) => (
                  <Link href="/" key={index}>
                    <li className="text-neutral-500 text-sm lg:text-base">{menu.title}</li>
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
