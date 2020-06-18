import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/img/logo.svg";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
