import {
  FaComment as CommentIcon,
  FaShareSquare as ShareIcon,
  FaEye as ViewIcon,
} from "react-icons/fa";
import { FcLike as LikeIcon } from "react-icons/fc";
import { InfoItemProps } from "../types/info";

const iconSize = 12;

const INFO_ITEMS : InfoItemProps[] = [
  {
    title: "Total Views",
    count: 9.999,
    unit: "views",
    percent: 5,
    icon: <ViewIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Total Likes",
    count: 8.111,
    unit: "likes",
    percent: 5,
    icon: <LikeIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Total Comments",
    count: 7.111,
    unit: "comments",
    percent: 5,
    icon: <CommentIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Total Shares",
    count: 6.111,
    unit: "shares",
    percent: 5,
    icon: <ShareIcon size={iconSize} />,
    isShow: true,
  },
];

export default INFO_ITEMS;
