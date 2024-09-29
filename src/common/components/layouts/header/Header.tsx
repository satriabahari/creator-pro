import MenuItemList from "./MenuItemList";
import Profile from "./Profile";
import ThemeSwitcher from "../../elements/ThemeSwitcher";
import LoginButton from "../../elements/LoginButton";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  return (
    <header
      className="fixed z-10 w-full border-b border-neutral-300 bg-white/50 backdrop-blur-xl dark:border-neutral-700 dark:bg-[#121212]/50"
      data-aos="fade-down"
    >
      <div className="flex items-center justify-between px-8 py-3 lg:px-16">
        <Profile />
        <div className="hidden md:block">
          <MenuItemList />
        </div>
        <div className="hidden gap-4 md:flex lg:gap-8">
          <ThemeSwitcher />
          <LoginButton />
        </div>
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
