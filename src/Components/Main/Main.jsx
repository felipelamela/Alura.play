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
      {categorias.map(
        (categoria) =>
          content.length > 0 && (
            <Categoria
              key={categoria.cor}
              categoria={categoria}
              gerarDestaque={gerarDestaque}
              content={content.filter(
                (conteudo) => conteudo.categoria === categoria.nome
              )}
              setDestaque={setDestaque}
            />
          )
      )}
    </main>
  );
};

export default Main;

