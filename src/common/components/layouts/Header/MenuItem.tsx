import Link from "next/link";
import { usePathname } from "next/navigation";

import cn from "@/common/libs/clsxm";
import { MenuItemProps } from "@/common/types/menu";

interface MenuExpandItemProps extends MenuItemProps {
  setIsOpen?: (isOpen: boolean) => void;
}

const MenuItem = ({ title, href, icon, setIsOpen }: MenuExpandItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <button
      className={cn(
        "rounded-md p-2 text-sm font-medium text-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 md:hover:bg-transparent md:dark:hover:bg-transparent",
        isActive &&
          "bg-neutral-300 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 md:bg-transparent md:dark:bg-transparent",
      )}
      onClick={() => setIsOpen && setIsOpen(false)}
    >
      <Link href={href} className="flex items-center gap-1.5">
        {icon && <div className="block md:hidden">{icon}</div>}
        <p>{title}</p>
      </Link>
    </button>
  );
};

export default MenuItem;
