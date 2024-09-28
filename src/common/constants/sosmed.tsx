import {
  FaInstagram as InstagramIcon,
  FaYoutube as YoutubeIcon,
  FaFacebook as FacebookIcon,
  FaTiktok as TiktokIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa";
import { SiGoogleadsense as GoogleAdsenseIcon } from "react-icons/si";
import { IoLogoFigma as FigmaIcon } from "react-icons/io5";
import { FaSlack as SlackIcon } from "react-icons/fa";
import { SiGoogleanalytics as GoogleAnalyticsIcon } from "react-icons/si";

import { SosmedItemProps } from "../types/sosmed";

const iconSize = 20;

const SOSMED_ITEMS: SosmedItemProps[] = [
  {
    title: "Instagram",
    icon: <InstagramIcon size={iconSize} />,
    className:
      "bg-gradient-to-b from-purple-400 via-pink-400 to-orange-400 text-neutral-100",
    isShow: true,
    isActive: true,
  },
  {
    title: "Youtube",
    icon: <YoutubeIcon size={iconSize} />,
    className:
      "bg-gradient-to-b from-red-200 to-red-300 text-neutral-100 text-red-600",
    isShow: true,
    isActive: true,
  },
  {
    title: "Facebook",
    icon: <FacebookIcon size={iconSize} />,
    className: "bg-gradient-to-b from-blue-100 to-blue-300 text-blue-600",
    isShow: true,
    isActive: true,
  },
  {
    title: "Twitter",
    icon: <TwitterIcon size={iconSize} />,
    className: "bg-gradient-to-b from-sky-100 to-sky-300 text-sky-600",
    isShow: true,
  },
  {
    title: "Tiktok",
    icon: <TiktokIcon size={iconSize} />,
    className:
      "bg-gradient-to-b from-neutral-200 to-neutral-400 text-neutral-900",
    isShow: true,
  },

  {
    title: "Figma",
    icon: <FigmaIcon size={iconSize} />,
    className: "bg-gradient-to-b from-red-400 to-purple-400 text-neutral-100",
    isShow: true,
  },
  {
    title: "Slack",
    icon: <SlackIcon size={iconSize} />,
    className:
      "bg-gradient-to-br from-blue-300 via-red-500 to-yellow-300 text-neutral-100",
    isShow: true,
  },
  {
    title: "Google AdSense",
    icon: <GoogleAdsenseIcon size={iconSize} />,
    className: "bg-gradient-to-br from-yellow-300 to-green-300 text-blue-600",
    isShow: true,
  },
  {
    title: "Google Analytics",
    icon: <GoogleAnalyticsIcon size={iconSize} />,
    className:
      "bg-gradient-to-br from-orange-300 to-yellow-300 text-orange-600 ",
    isShow: true,
  },
];

export default SOSMED_ITEMS;
