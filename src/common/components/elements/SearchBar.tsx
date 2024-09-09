import cn from "@/common/libs/clsxm";
import React from "react";
import { FaSearch as SearchIcon } from "react-icons/fa";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ placeholder, className }: SearchBarProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border-2 bg-neutral-200 dark:bg-neutral-700 px-4 py-2 dark:border-neutral-600 ",
        className,
      )}
    >
      <SearchIcon className="text-neutral-500" />
      <input
        type="text"
        placeholder={placeholder ? placeholder : "Search"}
        className="text-sm outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchBar;
