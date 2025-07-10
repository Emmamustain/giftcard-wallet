import React from "react";
import "./Header.css";
import AddCardModal from "../AddCardModal/AddCardModal";
import SearchBar from "../SearchBar/SearchBar";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

function Header() {
  return (
    <header className="Header">
      <div className="Logo">LOGO</div>
      <div className="hidden md:block w-full">
        <SearchBar />
      </div>
      <div className="Right">
        <AddCardModal />
        <DropDownMenu />
      </div>
    </header>
  );
}

export default Header;
