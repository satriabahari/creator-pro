import Link from "next/link";
import { SiContentstack as LogoIcon } from "react-icons/si";

import MENU_FOOTER from "@/common/constants/menu_footer";

const MenuList = () => {
  return (
    <div
      className="rounded-2xl p-0.5"
      data-aos="fade-right"
      data-aos-anchor="#footer"
    >
      <div className="flex h-full flex-col gap-5 rounded-2xl bg-gradient-to-b from-neutral-200 to-neutral-100 p-8 dark:from-neutral-800 dark:to-neutral-900">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <LogoIcon size={36} />
            <h2 className="font-semibold text-neutral-700 dark:text-neutral-300 lg:text-lg">
              Content Creators
            </h2>
          </div>
          <p className="text-sm text-neutral-500 lg:text-base">
            Empowering creators, amplifying impact
          </p>
          <hr className="border-t border-neutral-700 dark:border-neutral-300" />
        </div>
        <div className="flex justify-between gap-4">
          {MENU_FOOTER.map((item, index) => (
            <div key={index}>
              <h5 className="mb-4 font-medium text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h5>
              <ul className="flex flex-col gap-2">
                {item.menus.map((menu, index) => (
                  <Link href="/" key={index}>
                    <li className="text-sm text-neutral-500">{menu.title}</li>
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
