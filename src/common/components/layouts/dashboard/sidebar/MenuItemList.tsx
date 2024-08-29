import React from "react";
import MenuItem from "./MenuItem";
import MENU_SIDEBAR_ITEMS from "@/common/constants/menu_sidebar";

const MenuItemList = () => {
  const filteredMenus = MENU_SIDEBAR_ITEMS.slice(0, 3).filter(
    (menu) => menu.isShow,
  );
  const otherMenus = MENU_SIDEBAR_ITEMS.slice(3).filter((menu) => menu.isShow);

  return (
    <div className="flex flex-col h-full justify-between gap-10">
      <div className="space-y-4">
        {filteredMenus.map((menu, index) => (
          <MenuItem key={index} {...menu} />
        ))}
      </div>
      <div className="space-y-4">
        {otherMenus.map((menu, index) => (
          <MenuItem key={index} {...menu} />
        ))}
      </div>
    </div>
  );
};

export default MenuItemList;
