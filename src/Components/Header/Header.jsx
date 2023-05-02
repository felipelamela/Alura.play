import React from "react";
import ButtonNewContent from "../Boxes/ButtonNewContent";

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <img src="img/AluraPlay.png" className="ImagemLogo" alt="" />
        <ButtonNewContent name="Novo Vídeo" />
      </div>
    </header>
  );
};

export default Header;
