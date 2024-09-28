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
    href: "mailto:satriaabaharii@gmail.com",
    isShow: true,
  },
  {
    icon: <LinkedinIcon size={iconSize} />,
    href: "https://www.linkedin.com/in/satria-bahari/",
    isShow: true,
  },
  {
    icon: <InstagramIcon size={iconSize} />,
    href: "https://www.instagram.com/satriabaharii_/",
    isShow: true,
  },
];

export default CONTACT_ITEMS;
