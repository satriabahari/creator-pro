"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SidebarButton from "./SidebarButton";
import MenuItemList from "../header/MenuItemList";
import LoginButton from "../../elements/LoginButton";
import ThemeSwitcher from "../../elements/ThemeSwitcher";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="block md:hidden">
      <SidebarButton isOpen={isOpen} handleOpen={handleOpen} />
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-10 h-full min-h-screen bg-black bg-opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div
              ref={sidebarRef}
              className="absolute right-0 top-0 z-20 flex h-full min-h-screen w-[250px] flex-col items-end justify-between bg-gradient-to-b from-neutral-200 to-neutral-100 px-8 py-3 dark:from-neutral-800 dark:to-neutral-900"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="space-y-8">
                <div className="flex gap-4">
                  <LoginButton />
                  <ThemeSwitcher />
                  <SidebarButton isOpen={isOpen} handleOpen={handleOpen} />
                </div>
                <div className="w-full">
                  <MenuItemList setIsOpen={setIsOpen} />
                </div>
              </div>
              <p className="mb-2 text-center text-xs text-neutral-500 lg:text-sm">
                ©2024 Content Creators. All rights reserved.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
