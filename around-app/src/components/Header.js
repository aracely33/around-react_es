import React from "react";
import logoImage from "../images/Headerlogo-min.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img
          className="header__logo "
          src={logoImage}
          alt="Around U.S. logo"
        ></img>
      </header>
    </>
  );
}

export default Header;
