import React from "react";
import ButtonScroll from "../Boxes/ButtonScroll";
import ContentVideo from "../ContentVideo/ContentVideo";

const Categoria = ({ categoria, content, setDestaque, gerarDestaque }) => {

  return (
    <div className="categoria">
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
            {content.map((conteudo) => (
              <ContentVideo conteudo={conteudo} key={conteudo.id}/>
            ))}
          </div>
          <ButtonScroll name="❯" className="next" />
        </div>
      </div>
    </div>
  );
};

export default Categoria;
