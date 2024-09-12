import React from "react";
import { SosmedItemProps } from "../types/sosmed";
import {
  FaInstagram as InstagramIcon,
  FaYoutube as YoutubeIcon,
  FaFacebook as FacebookIcon,
  FaGithub as GithubIcon,
  FaTiktok as TiktokIcon,
  FaWhatsapp as WhatsappIcon,
  FaTwitter as TwitterIcon,
  FaTelegram as TelegramIcon,
} from "react-icons/fa";

const iconSize = 20;

const SOSMED_ITEMS: SosmedItemProps[] = [
  {
    title: "Instagram",
    icon: <InstagramIcon size={iconSize} />,
    className: "bg-purple-200 text-purple-600",
    isShow: true,
    isActive: true,
  },
  {
    title: "Youtube",
    icon: <YoutubeIcon size={iconSize} />,
    className: "bg-red-200 text-red-600",
    isShow: true,
    isActive: true,
  },
  {
    title: "Facebook",
    icon: <FacebookIcon size={iconSize} />,
    className: "bg-blue-200 text-blue-600",
    isShow: true,
    isActive: true,
  },
  {
    title: "Whatsapp",
    icon: <WhatsappIcon size={iconSize} />,
    className: "bg-green-200 text-green-600",
    isShow: true,
  },
  {
    title: "Twitter",
    icon: <TwitterIcon size={iconSize} />,
    className: "bg-sky-200 text-sky-600",
    isShow: true,
  },
  {
    title: "Telegram",
    icon: <TelegramIcon size={iconSize} />,
    className: "bg-sky-200 text-sky-600",
    isShow: true,
  },
  {
    title: "Tiktok",
    icon: <TiktokIcon size={iconSize} />,
    className: "bg-neutral-900 text-neutral-50",
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
