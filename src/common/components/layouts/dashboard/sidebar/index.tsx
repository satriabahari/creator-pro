import MenuItemList from "./MenuItemList";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <header className="min-h-screen w-1/5">
      <div className="h-full w-full rounded-lg border-2 shadow-xl dark:border-neutral-700 bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900">
        <div className="flex h-full flex-col justify-between gap-16 px-4 py-3">
          <Profile />
          <MenuItemList />
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
