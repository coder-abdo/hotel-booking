import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

export const Searchbar = () => {
  return (
    <div className="relative sm:block hidden max-w-md w-full">
      <SearchIcon className="absolute left-4 top-2 h-6 w-6 stroke-gray-400" />
      <Input
        placeholder="Search"
        className="pl-12 placeholder:text-xl"
        type="search"
      />
    </div>
  );
};
