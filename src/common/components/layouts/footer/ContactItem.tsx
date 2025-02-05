import Link from "next/link";

import { ContactItemProps } from "@/common/types/contact";

const ContactItem = ({ href, icon, ...others }: ContactItemProps) => {
  return (
    <Link href={href}>
      <div
        className="rounded-2xl from-purple-500 via-pink-500 to-yellow-500 p-0.5"
        {...others}
      >
        <div className="flex items-center justify-center rounded-2xl bg-gradient-to-b from-neutral-200 to-neutral-100 p-8 text-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-300 lg:p-[52px]">
          {icon}
        </div>
      </div>
    </Link>
  );
};

export default ContactItem;
