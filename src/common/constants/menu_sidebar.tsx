import { FaTasks as TaskIcon } from "react-icons/fa";
import { TbLayoutDashboardFilled as DashboardIcon } from "react-icons/tb";
import { MdMonetizationOn as MonetizationIcon } from "react-icons/md";
import { IoSettings as SettingsIcon } from "react-icons/io5";
import { IoMdLogOut as LogoutIcon } from "react-icons/io";

import { MenuSidebarItemProps } from "../types/menuSidebar";

const iconSize = 18;

const MENU_SIDEBAR_ITEMS: MenuSidebarItemProps[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Task",
    href: "/dashboard/task",
    icon: <TaskIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Monetization",
    href: "/dashboard/monetizaton",
    icon: <MonetizationIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <SettingsIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Logout",
    href: "/",
    icon: <LogoutIcon size={iconSize} />,
    isShow: true,
  },
];

export default MENU_SIDEBAR_ITEMS;
