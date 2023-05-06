import React from "react";
import ButtonNewContent from "../Boxes/ButtonNewContent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <Link to="/">
          <img src="img/AluraPlay.png" className="ImagemLogo" alt="" />
        </Link>
        <ButtonNewContent name="Novo Vídeo" />
      </div>
    </header>
  );
};

export default Header;
/*

className="buttonNewContent"
 */
