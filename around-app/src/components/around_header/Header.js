import React from "react";
import logoImage from "../../images/Headerlogo-min.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logoImage} alt="Around U.S. logo"></img>
      </header>
    </>
  );
}

export default Header;
