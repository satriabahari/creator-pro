import { FaSearch as SearchIcon } from "react-icons/fa";

import cn from "@/common/libs/clsxm";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ placeholder, className }: SearchBarProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border-2 bg-neutral-200 px-4 py-2 dark:border-neutral-600 dark:bg-neutral-700",
        className,
      )}
    >
      <SearchIcon className="text-neutral-500" />
      <input
        type="text"
        placeholder={placeholder ? placeholder : "Search"}
        className="bg-transparent text-sm outline-none"
      />
    </div>
  );
};

export default SearchBar;
