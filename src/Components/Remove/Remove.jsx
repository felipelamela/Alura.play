import React from "react";

const Remove = ({ content, setContent }) => {
  const remove = (event) => {
    console.log(content);
    const elementoClicado =
      event.target.parentNode.parentNode.getAttribute("name");
    const result = content.filter((content) => content.id !== elementoClicado);
    setContent(result);
    console.log(content.id);
  };
  return (
    <section>
      <div className="containerRemove">
        {content.map((content) => (
          <div
            key={content.id}
            name={content.id}
            className="containerContentRemove"
          >
            <h1 style={{ color: `white` }} className="idRemove">
              {content.id}
            </h1>
            <h2 style={{ color: `white` }} className="tituloRemove">
              {content.titulo}
            </h2>
            <p style={{ color: `white` }} className="descricaoRemove">
              {content.descricao}
            </p>
            <div className="containerBotao">
              <button className="botaoRemove" onClick={remove}>
                X
              </button>
              <button className="botaoEdit">⚙</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Remove;
