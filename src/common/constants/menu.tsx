import { MenuItemProps } from "../types/menu";
import { BiHome as HomeIcon } from "react-icons/bi";
import { RiBloggerLine as BlogIcon } from "react-icons/ri";
import { LuLayoutDashboard as DashboardIcon } from "react-icons/lu";

const iconSize = 20;

const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon size={iconSize}/>,
    isShow: true,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: <BlogIcon size={iconSize}/>,
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
    icon: <DashboardIcon size={iconSize}/>,
    isShow: true,
  },
];

export default MENU_ITEMS;
