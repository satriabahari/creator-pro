import React from "react";
import { SosmedItemProps } from "../types/sosmed";
import {
  FaInstagram as InstagramIcon,
  FaYoutube as YoutubeIcon,
  FaFacebook as FacebookIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa";

const iconSize = 20;

const SOSMED_ITEMS: SosmedItemProps[] = [
  {
    title: "Instagram",
    icon: <InstagramIcon size={iconSize} />,
    className: "bg-purple-200 text-amber-500",
    isShow: true,
  },
  {
    title: "Youtube",
    icon: <YoutubeIcon size={iconSize} />,
    className: "bg-red-200 text-red-500",
    isShow: true,
  },
  {
    title: "Facebook",
    icon: <FacebookIcon size={iconSize} />,
    className: "bg-blue-200 text-blue-500",
    isShow: true,
  },
  {
    title: "Github",
    icon: <GithubIcon size={iconSize} />,
    className: "bg-neutral-600 text-neutral-50",
    isShow: true,
  },
];

export default SOSMED_ITEMS;
