"use client";

import React, { useState } from "react";
import { CgMenuLeft as OpenIcon } from "react-icons/cg";
import { IoClose as CloseIcon } from "react-icons/io5";

interface SidebarButtonProps {
  isOpen: boolean;
  handleOpen: () => void;
}

const SidebarButton = ({ isOpen, handleOpen }: SidebarButtonProps) => {
  return (
    <button
      className="card-hover block rounded-lg border-2 bg-gradient-to-b p-2 transition duration-300 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 lg:hidden "
      onClick={handleOpen}
    >
      {!isOpen ? <OpenIcon size={16} /> : <CloseIcon size={16} />}
    </button>
  );
};

export default SidebarButton;
