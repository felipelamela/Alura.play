import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ButtonNewContent = ({ name, ...props }) => {
  return (
    <Link to="/dashboard/Conteudo" className="buttonLogin" {...props}>
      {name}
    </Link>
  );
};

export default ButtonNewContent;
