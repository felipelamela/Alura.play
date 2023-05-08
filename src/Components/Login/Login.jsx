import React from "react";

const Login = ({ usuario }) => {

  const [login, setLogin] = React.useState(``);
  const [password, setPassword] = React.useState(``)


  const confirmation = (event, usuario) =>{
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={(event) => confirmation(event)} className="formNewContent " action="">
        <h2 className="formTitulo ">Login</h2>
        <label className="labelText" htmlFor="login">
          E-mail
        </label>
        <input className="inputText " type="text" id="login" />

        <label className="labelText" htmlFor="login">
          Senha
        </label>
        <input className="inputText " type="password" id="login" />
        <button className="buttonLogin" type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
