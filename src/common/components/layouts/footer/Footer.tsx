import ContactList from "./ContactList";
import Copyright from "./Copyright";
import EmailNewsletter from "./EmailNewsletter";
import MenuList from "./MenuList";

const Footer = () => {
  return (
    <footer
      className="flex flex-col gap-4 overflow-hidden px-8 lg:px-16"
      id="footer"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <MenuList />
        <div className="flex flex-col gap-4">
          <EmailNewsletter />
          <ContactList />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
