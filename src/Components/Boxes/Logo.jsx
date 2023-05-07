import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="img/Alura.png" className="ImagemLogo" alt="" />
    </Link>
  );
};

export default Logo;
