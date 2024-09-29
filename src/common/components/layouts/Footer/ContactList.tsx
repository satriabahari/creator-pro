import ContactItem from "./ContactItem";

import CONTACT_ITEMS from "@/common/constants/contact";

const ContactList = () => {
  const filteredContacts = CONTACT_ITEMS.filter((item) => item.isShow);
  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredContacts.map((contact, index) => (
        <ContactItem
          key={index}
          {...contact}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-anchor="#footer"
        />
      ))}
    </div>
  );
};

export default ContactList;
