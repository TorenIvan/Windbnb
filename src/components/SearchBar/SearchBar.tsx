import React, { useState, FC } from "react";
import "./SearchBarStyles.css";
import Logo from "../../logo.png";

const SearchBar: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  let searchBar: JSX.Element;

  searchBar = (
    <>
      <div id="icon-container">
        <img id="logo" src={Logo} alt="logo" />
      </div>
      <div className="search-bar" id="closed"></div>
    </>
  );
  if (isOpen) {
    searchBar = <div className="search-bar" id="open"></div>;
  }

  return <nav className="nav-bar">{searchBar}</nav>;
};

export default SearchBar;
