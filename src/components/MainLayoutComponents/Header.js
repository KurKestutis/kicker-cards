import React, { useState } from "react";
import "./Header.scss";
import MenuButton from "../MenuComponents/MenuButton";

const Header = (props) => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [header__nav__list, setMenuClass] = useState("header__nav__list hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [header, setHeader100] = useState("header header100");

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("header__nav__list visible");
      setHeader100("header header100vh");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("header__nav__list hidden");
      setHeader100("header headerNo100vh");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className={header}>
      <nav className="header__nav">
        <div
          className="header__nav__burger"
          onClick={() => {
            updateMenu();
            props.toggleNavMain(isMenuClicked);
          }}
        >
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>

        <ul className={header__nav__list}>
          <MenuButton />
          <MenuButton />
          <MenuButton />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
