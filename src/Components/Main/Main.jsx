import React from "react";
import Categoria from "../Categoria/Categoria";

const Main = ({ content, categorias, setDestaque }) => {
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

  return (
    <main className="container">
      {categorias.map((categoria) => (
        <Categoria
          key={categoria.cor}
          categoria={categoria}
          gerarDestaque={gerarDestaque}
          content={content.filter(
            (conteudo) => conteudo.categoria === categoria.nome
          )}
          setDestaque={setDestaque}
        />
      ))}
    </main>
  );
};

export default Main;

/*

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


*/
