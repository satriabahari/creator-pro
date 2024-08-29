import MenuItemList from "./MenuItemList";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <header className="w-1/5 min-h-screen">
      <div className="w-full h-full rounded-lg border border-purple-500 shadow-xl">
        <div className="flex flex-col px-4 py-3 justify-between h-full gap-16">
          <Profile />
          <MenuItemList />
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
