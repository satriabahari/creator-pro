import cn from "@/common/libs/clsxm";
import React from "react";
import { IoNotifications as NotificationIcon } from "react-icons/io5";

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton = ({ className }: NotificationButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-lg border-2 bg-gradient-to-b p-2 transition duration-300 hover:scale-110 active:scale-100 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-50",
        className,
      )}
    >
      <NotificationIcon size={16} />
    </button>
  );
};

export default NotificationButton;
