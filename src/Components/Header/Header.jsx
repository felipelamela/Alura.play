import React from "react";
import ButtonNewContent from "../Boxes/ButtonNewContent";
import Logo from "../Boxes/Logo";

const Header = ({ userLog, setUserLog, usuario }) => {
  const BotaoLogin = !userLog ? (
    <ButtonNewContent rota="login" name="Login" />
  ) : (
    <ButtonNewContent rota="dashboard/Conteudo" name={usuario.nome} />
  );
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <Logo setUserLog={setUserLog} />
        {BotaoLogin}
      </div>
    </header>
  );
};

export default Header;
