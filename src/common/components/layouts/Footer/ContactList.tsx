import CONTACT_ITEMS from "@/common/constants/contact";
import Image from "next/image";
import React from "react";

interface ContactItemProps {
  icon: JSX.Element;
  [propname: string]: React.ReactNode | string | undefined;
}

const ContactItem = ({ icon, ...others }: ContactItemProps) => {
  return (
    <div
      className="rounded-2xl bg-gradient-to-br p-0.5 dark:from-purple-500 dark:via-pink-500 dark:to-yellow-500"
      {...others}
    >
      <div className="flex items-center justify-center rounded-2xl bg-neutral-200 bg-gradient-to-b p-[52px] dark:from-neutral-800 dark:to-neutral-900">
        {icon}
      </div>
    </div>
  );
};

const ContactList = () => {
  const filteredContacts = CONTACT_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredContacts.map((contact, index) => (
        <ContactItem
          key={index}
          icon={contact.icon}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-anchor="#footer"
        />
      ))}
    </div>
  );
};

export default ContactList;
