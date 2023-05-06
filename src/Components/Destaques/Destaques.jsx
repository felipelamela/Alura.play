import React from "react";

function corDescricao(conteudo, categorias) {
  let corDestaque = "";
  categorias.forEach((categoria) => {
    if (categoria.nome === conteudo.categoria) {
      corDestaque = categoria.cor;
    }
  });

  return corDestaque;
}

function conteudoDestaque(content, idDestaque) {
  let contentDestaque = "";
  content.forEach((conteudo) => {
    if (conteudo.id === idDestaque) {
      contentDestaque = conteudo;
    }
  });
  return contentDestaque;
}
//            vai receber o  ID
const Destaques = ({ content, categorias, idDestaque }) => {
  let conteudo = conteudoDestaque(content, idDestaque);
  let corDestaque = corDescricao(conteudo, categorias);
  return (
    <div className="containerDestaque">
      <img className="imgDestaque" src={conteudo.urlThumbnail} alt="img" />
      <div
        className="containerDestaqueStyle"
        style={{ background: `${corDestaque}27` }}
      >
        <div className="containerDestaqueDescricao">
          <p
            className="categoriaDescricaoCor"
            style={{ border: `2px solid ${corDestaque}` }}
          >
            {conteudo.categoria}
          </p>
          <h2 className="tituloDescricao">{conteudo.titulo}</h2>
          <p className="descricaoConteudo">{conteudo.descricao}</p>
          <a href={conteudo.urlVideo}>assita</a>
        </div>
      </div>
    </div>
  );
};

export default Destaques;

//linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)

//{ background: `${corDestaque}27` }
