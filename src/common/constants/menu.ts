import { MenuItemProps } from "../types/menu";

const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
    isShow: true,
  },
  {
    title: "Blog",
    href: "/blog",
    isShow: true,
  },
  {
    title: "Community",
    href: "/community",
    isShow: false,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    isShow: true,
  },
];

export default MENU_ITEMS;
