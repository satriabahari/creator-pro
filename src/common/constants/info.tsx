import {
  FaComment as CommentIcon,
  FaShareSquare as ShareIcon,
  FaEye as ViewIcon,
} from "react-icons/fa";
import { FcLike as LikeIcon } from "react-icons/fc";
import { InfoItemProps } from "../types/info";

const iconSize = 16;

const INFO_ITEMS : InfoItemProps[] = [
  {
    title: "Total Views",
    count: 9.999,
    unit: "views",
    percent: 5,
    backgroundPercent: "bg-blue-300",
    icon: <ViewIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Total Likes",
    count: 8.111,
    unit: "likes",
    percent: 5,
    backgroundPercent: "bg-green-300",
    icon: <LikeIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Total Comments",
    count: 7.111,
    unit: "comments",
    percent: 5,
    backgroundPercent: "bg-yellow-300",
    icon: <CommentIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Total Shares",
    count: 6.111,
    unit: "shares",
    percent: 5,
    backgroundPercent: "bg-purple-300",
    icon: <ShareIcon size={iconSize} />,
    isShow: false,
  },
];

export default INFO_ITEMS;
