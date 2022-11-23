import React from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-list-item">
            <h3>Lorem ipsum</h3>
          </li>
          <li className="header-nav-list-item">
            <h3>Lorem ipsum</h3>
          </li>
          <li className="header-nav-list-item">
            <h3>Lorem ipsum</h3>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
