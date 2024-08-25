import { MenuItemProps } from "@/common/types/menu";
import Link from "next/link";
import React from "react";

const MenuItem = ({ title, href }: MenuItemProps) => {
  return (
    <Link href={href} className="text-sm font-medium hover:text-purple-600 text-neutral-600">
      {title}
    </Link>
  );
};

export default MenuItem;
