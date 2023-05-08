import React from "react";
import { Link } from "react-router-dom";

const ButtonNewContent = ({ name,rota, ...props }) => {
  return (
    <Link to={rota} className="buttonLogin" {...props}>
      {name}
    </Link>
  );
};

export default ButtonNewContent;
