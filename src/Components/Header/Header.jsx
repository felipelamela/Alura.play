import React from "react";
import ButtonNewContent from "../Boxes/ButtonNewContent";

const Header = () => {
  return (
    <header className="headerContainer">
      <img src="img/AluraPlay.png" className="ImagemLogo" alt="" />
      <ButtonNewContent name="Novo Vídeo"/>
    </header>
  );
};

export default Header;
