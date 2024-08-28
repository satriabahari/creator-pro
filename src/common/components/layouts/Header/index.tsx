import ActionButtons from "./ActionButtons";
import MenuItemList from "./MenuItemList";
import Profile from "./Profile";

const Header = () => {
  return (
    <header className="w-full border border-purple-500 shadow-xl rounded-lg">
      <div className="flex items-center justify-between py-3 px-4">
        <Profile />
        <MenuItemList />
        <ActionButtons />
      </div>
    </header>
  );
};

export default Header;
