import ActionButtons from "./ActionButtons";
import MenuItemList from "./MenuItemList";
import Profile from "./Profile";

const Header = () => {
  return (
    <header className="fixed z-10 w-full border-b dark:border-neutral-700 dark:bg-[#121212]/50 backdrop-blur-xl" data-aos="fade-down">
      <div className="flex items-center justify-between px-8 py-3">
        <Profile />
        <MenuItemList />
        <ActionButtons />
      </div>
    </header>
  );
};

export default Header;
