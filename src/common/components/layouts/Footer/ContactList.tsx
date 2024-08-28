import CONTACT_ITEMS from "@/common/constants/contact";
import Image from "next/image";
import React from "react";

interface ContactItemProps {
  icon: JSX.Element;
}

const ContactItem = ({ icon }: ContactItemProps) => {
  return <div className="rounded-2xl bg-neutral-200 p-[52px] flex items-center justify-center">{icon}</div>;
};

const ContactList = () => {
  const filteredContacts = CONTACT_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredContacts.map((contact, index) => (
        <ContactItem key={index} icon={contact.icon} />
      ))}
    </div>
  );
};

export default ContactList;
