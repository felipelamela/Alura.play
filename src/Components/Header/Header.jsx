import React from "react";
import ButtonNewContent from "../Boxes/ButtonNewContent";
import Logo from "../Boxes/Logo";

const Header = ({ userLog, setUserLog, usuario }) => {
  const deslogUser = () => {
    setUserLog(false);
  };
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <Logo />
        {!userLog && <ButtonNewContent rota="login" name="Login" />}
        {userLog && (
          <div className="containerBottuns">
            <ButtonNewContent rota="dashboard/Conteudo" name={usuario.nome} />
            <ButtonNewContent
              setUserLog={setUserLog}
              rota="/"
              name="Deslogar"
              onClick={deslogUser}
            />
          </div>
        )}
        {console.log(userLog)}
      </div>
    </header>
  );
};

export default Header;
