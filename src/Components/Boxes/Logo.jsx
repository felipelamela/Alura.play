import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <p className="logoText">ALURA.PLAY <span className="logoSpan">▶</span></p>
    </Link>
  );
};

export default Logo;
