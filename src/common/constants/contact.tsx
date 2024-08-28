import {
  FaLinkedin as LinkedinIcon,
  FaInstagram as InstagramIcon,
} from "react-icons/fa";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { ContactItemProps } from "../types/contact";

const iconSize = 68;

const CONTACT_ITEMS: ContactItemProps[] = [
  {
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
  },
  {
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
  },
  {
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
  },
];

export default CONTACT_ITEMS;
