import { MenuItemProps } from "@/common/types/menu";
import Link from "next/link";

const MenuItem = ({ title, href }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className="dark:text-neutral-500n text-sm font-medium text-neutral-500 dark:hover:text-neutral-300"
    >
      {title}
    </Link>
  );
};

export default MenuItem;
