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
        "flex items-center gap-2 rounded-full bg-neutral-200 px-4 py-2",
        className,
      )}
    >
      <SearchIcon className="text-neutral-500" />
      <input
        type="text"
        placeholder={placeholder ? placeholder : "Search"}
        className="bg-neutral-200 text-sm outline-none"
      />
    </div>
  );
};

export default SearchBar;
