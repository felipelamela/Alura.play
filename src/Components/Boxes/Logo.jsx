import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="img/AluraPlay.png" className="ImagemLogo" alt="" />
    </Link>
  );
};

export default Logo;
