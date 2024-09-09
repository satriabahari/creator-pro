import { MenuSidebarItemProps } from "@/common/types/menuSidebar";
import Link from "next/link";

const MenuItem = ({ title, href, icon }: MenuSidebarItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 hover:text-purple-600"
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

export default MenuItem;
