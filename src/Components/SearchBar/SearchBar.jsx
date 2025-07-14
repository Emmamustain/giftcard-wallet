import { Search } from "lucide-react";
import React from "react";
import { useState } from "react";
import useCardStore from "../../Hook/useCardsStore";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const { searchCards } = useCardStore();
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center mt-5 w-full ">
      {isOpen ? (
        <div
          className="absolute inset-0 bg-black/10"
          onClick={() => {
            closeDropDown();
          }}
        ></div>
      ) : null}

      <div className="relative mr-1 w-full max-w-[600px] ">
        <input
          type="text"
          className="border-gray-400 border-1 pl-10 rounded-3xl w-full h-10 "
          placeholder="Search ..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Search className="absolute left-2 bottom-2" color="gray" />
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-11 max-w-[570px] w-full z-10 rounded-md  shadow-lg bg-white`}
          role="search"
        >
          {/* ... Dropdown items ... */}
          <div className="py-1" role="none ">
            {searchResults.length > 0 ? (
              searchResults.map((searchResult) => (
                <a
                  href={`/card/${searchResult.id}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="searchCard"
                  key={searchResult.id}
                >
                  {searchResult.name}
                </a>
              ))
            ) : (
              <p className="text-sm text-gray-700 pl-6">
                There is no card with this name or brand{" "}
              </p>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          toggleDropdown();
          const results = searchCards(inputValue);
          setSearchResults(results);
          console.log(searchCards(inputValue));
        }}
        className="rounded-3xl z-10 bg-blue-600 border-1 border-blue-700 text-amber-50 h-10 w-fit px-3 hover:bg-blue-500 hover:border-blue-500 hover:cursor-pointer"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
