import React from "react";
import Remove from "../Remove/Remove";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Login = ({ setUserLog, usuario, setUsuario }) => {
  const [login, setLogin] = React.useState(``);
  const [password, setPassword] = React.useState(``);

  const confirmation = (event, usuario) => {
    event.preventDefault();
    const confirmaUsuario = usuario.login === login;
    const confirmaSenha = usuario.senha === password;

    if (confirmaUsuario && confirmaSenha) {
      window.location.href = "/dashboard/Conteudo";
    }
  };

  return (
    <>
      <form
        onSubmit={(event) => confirmation(event, usuario, login, password)}
        className="formNewContent "
        action=""
      >
        <h2 className="formTitulo ">Login</h2>
        <label className="labelText" htmlFor="login">
          E-mail
        </label>
        <input
          className="inputText "
          type="text"
          id="login"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />

        <label className="labelText" htmlFor="password">
          Senha
        </label>
        <input
          className="inputText"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="buttonLogin" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
