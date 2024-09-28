import { IoAnalytics as AnalyticIcon } from "react-icons/io5";
import { MdManageAccounts as ManageIcon } from "react-icons/md";
import { TbReportMoney as MonetizationIcon } from "react-icons/tb";
import { FaPeopleGroup as CollaborationIcon } from "react-icons/fa6";
import { TbSeo as SeoIcon } from "react-icons/tb";
import { TbTemplate as TemplateIcon } from "react-icons/tb";

import { ValueProps } from "../types/value";

const iconSize = 20;

const VALUE_ITEMS: ValueProps[] = [
  {
    icon: <MonetizationIcon size={iconSize} />,
    title: "Easy Monetization",
    description:
      "Seamlessly integrate with platforms to monetize your content effortlessly.",
    isShow: true,
  },
  {
    icon: <ManageIcon size={iconSize} />,
    title: "Content Management",
    description:
      "Organize and manage your creations with our user-friendly tools.",
    isShow: true,
  },
  {
    icon: <CollaborationIcon size={iconSize} />,
    title: "Collaborate with Creators",
    description:
      "Connect and collaborate with a global network of like-minded creators.",
    isShow: true,
  },
  {
    icon: <AnalyticIcon size={iconSize} />,
    title: "Advanced Analytics",
    description:
      "Track your performance and audience engagement with our in-depth analytics.",
    isShow: true,
  },
  {
    icon: <SeoIcon size={iconSize} />,
    title: "SEO Optimization",
    description:
      "Boost your visibility with built-in SEO features tailored for creators.",
    isShow: true,
  },
  {
    icon: <TemplateIcon size={iconSize} />,
    title: "Customizable Templates",
    description:
      "Use ready-made templates to create stunning profiles and portfolios.s",
    isShow: true,
  },
];

export default VALUE_ITEMS;
