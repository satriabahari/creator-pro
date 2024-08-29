import { MenuSidebarItemProps } from "../types/menuSidebar";
import { FaTasks as TaskIcon } from "react-icons/fa";
import { TbLayoutDashboardFilled as DashboardIcon } from "react-icons/tb";
import { MdMonetizationOn as MonetizationIcon } from "react-icons/md";
import { IoSettings as SettingsIcon } from "react-icons/io5";
import { IoMdLogOut as LogoutIcon } from "react-icons/io";

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
    href: "/task",
    icon: <TaskIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Monetization",
    href: "/monetizaton",
    icon: <MonetizationIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Settings",
    href: "/settings",
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
