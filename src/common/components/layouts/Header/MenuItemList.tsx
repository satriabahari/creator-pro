import MenuItem from "./MenuItem";

import MENU_ITEMS from "@/common/constants/menu";

interface MenuItemListProps {
  setIsOpen?: (isOpen: boolean) => void;
}

const MenuItemList = ({ setIsOpen }: MenuItemListProps) => {
  const filteredMenus = MENU_ITEMS.filter((menu) => menu.isShow);
  return (
    <div className="flex flex-col gap-4 md:flex-row lg:items-center lg:gap-10">
      {filteredMenus.map((menu, index) => (
        <MenuItem key={index} {...menu} setIsOpen={setIsOpen} />
      ))}
    </div>
  );
};

export default MenuItemList;
