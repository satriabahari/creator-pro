import ContactList from "./ContactList";
import Copyright from "./Copyright";
import EmailNewsletter from "./EmailNewsletter";
import MenuList from "./MenuList";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <MenuList/>
        <div className="flex flex-col gap-4">
          <EmailNewsletter />
          <ContactList />
        </div>
      </div>
      <Copyright/>
    </footer>
  );
};

export default Footer;
