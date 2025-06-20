import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    <div className="flex justify-center items-center mt-5 w-full">
      <div className="relative mr-1 w-full max-w-[600px] ">
        <input
          type="text"
          className="border-gray-400 border-1 pl-10 rounded-3xl w-full h-10 "
          placeholder="Search ..."
        />
        <Search className="absolute left-2 bottom-2" color="gray" />
      </div>
      <button className="rounded-3xl bg-blue-600 border-1 border-blue-700 text-amber-50 h-10 w-fit px-3 hover:bg-blue-500 hover:border-blue-500 hover:cursor-pointer">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
