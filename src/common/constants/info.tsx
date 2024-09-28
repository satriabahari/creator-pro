import { FaEye as ViewIcon } from "react-icons/fa";
import { GiProfit as EarningIcon } from "react-icons/gi";
import { AiFillLike as LikeIcon } from "react-icons/ai";

import { InfoItemProps } from "../types/info";

const iconSize = 16;

const INFO_ITEMS: InfoItemProps[] = [
  {
    title: "Total Views",
    count: 9.999,
    unit: "views",
    percent: 5,
    backgroundPercent: "bg-blue-300/50 border-blue-500",
    icon: <ViewIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Total Likes",
    count: 8.111,
    unit: "likes",
    percent: 5,
    backgroundPercent: "bg-green-300/50 border-green-500",
    icon: <LikeIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Total Earnings",
    count: 7.111,
    unit: "earnings",
    percent: 5,
    backgroundPercent: "bg-yellow-300/50 border-yellow-500",
    icon: <EarningIcon size={iconSize} />,
    isShow: true,
  },
];

export default INFO_ITEMS;
