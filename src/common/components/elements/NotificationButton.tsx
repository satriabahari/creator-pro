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
        "rounded-lg bg-purple-600/15 p-3 text-purple-600",
        className,
      )}
    >
      <NotificationIcon size={16} />
    </button>
  );
};

export default NotificationButton;
