import React from "react";
import ButtonScroll from "../Boxes/ButtonScroll";

function gerarConteudo(conteudo, categoria) {
  if (conteudo.categoria === categoria) {
    return (
      <div id={conteudo.id} key={conteudo.id} className="containerContent">
        <img className="ImagemThumbnail" src={conteudo.urlThumbnail} alt="" />
        <h2 className="contentTitle">{conteudo.titulo}</h2>
        <p className="contentDescription">{conteudo.descricao}</p>
      </div>
    );
  }
}

function gerarDestaque(event, content, setDestaque) {
  const id = event.target.parentNode.id;
  content.forEach((conteudo) => {
    if (conteudo.id === id) {
      setDestaque({
        id: conteudo.id,
        titulo: conteudo.titulo,
        categoria: conteudo.categoria,
        urlVideo: conteudo.urlVideo,
        urlThumbnail: conteudo.urlThumbnail,
        descricao: conteudo.descricao,
      });
    }
  });
}

const Main = ({ content, categorias, setDestaque }) => {
  return (
    <main className="container">
      {categorias.map((categoria) => (
        <div key={categoria.name} className="mainContainerPrimary">
          <h2
            className="category"
            style={{ borderBottom: `2px solid ${categoria.cor}` }}
          >
            {categoria.nome}
          </h2>
          <div className="mainContainer">
            <ButtonScroll name="❮" className="previous" />
            <div
              onClick={(event) => gerarDestaque(event, content, setDestaque)}
              className="containerAllContent"
            >
              {content.map((conteudo) =>
                gerarConteudo(conteudo, categoria.nome)
              )}
            </div>
            <ButtonScroll name="❯" className="next" />
          </div>
        </div>
      ))}
    </main>
  );
};

export default Main;
