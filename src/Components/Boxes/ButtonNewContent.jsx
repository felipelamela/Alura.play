import React from "react";
import { Link } from "react-router-dom";

const ButtonNewContent = ({ name, rota, setUserLog, ...props }) => {
  const deslogUser = () => {
    setUserLog(false);
  };
  return (
    <Link to={rota} className="buttonLogin" {...props}>
      {name}
    </Link>
  );
};

export default ButtonNewContent;
