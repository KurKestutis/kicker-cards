import React from "react";
import "./Header.scss";
import MenuButton from "../MenuButton";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav__list">
          <MenuButton key={1} />
          <MenuButton key={2} />
          <MenuButton key={3} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
