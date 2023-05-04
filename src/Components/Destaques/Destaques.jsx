import React from "react";

function corDescricao(content, categorias) {
  let corDestaque = "";
  categorias.forEach((categoria) => {
    if (categoria.nome === content[0].categoria) {
      corDestaque = categoria.cor;
    }
  });
  return corDestaque;
}

const Destaques = ({ content, categorias }) => {
  let corDestaque = corDescricao(content, categorias);
  return (
    <div className="containerDestaque">
      {console.log(corDescricao(content, categorias))}
      <img className="imgDestaque" src={content[0].urlThumbnail} />
      <div className="containerDestaqueDescricao">
        <p
          className="categoriaDescricao"
          style={{ border: `2px solid ${corDescricao(content, categorias)}` }}
        >
          {content[0].categoria}
        </p>
        <h2 className="tituloDescricao">{content[0].titulo}</h2>
        <p className="descricaoConteudo">asdijasjdiajsd</p>
        <p>{content[0].categoria}</p>
        <p>{categorias[0].nome}</p>
        <p>{corDescricao(content, categorias)}</p>
      </div>
    </div>
  );
};

export default Destaques;
