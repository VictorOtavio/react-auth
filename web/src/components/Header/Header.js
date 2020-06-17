import React from "react";

import "./Header.scss";

import logo from "../../assets/img/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
    </header>
  );
}

export default Header;
