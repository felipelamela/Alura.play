import React from "react";
import ButtonNewContent from "../Boxes/ButtonNewContent";
import Logo from "../Boxes/Logo";

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <Logo />
        <ButtonNewContent name="Login" />
      </div>
    </header>
  );
};

export default Header;
