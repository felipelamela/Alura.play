import React from "react";

const Remove = ({ content, setContent, setUserLog }) => {
  const logar = () => {
    return setUserLog(true);
  };

  const remove = (event) => {
    const elementoClicado =
      event.target.parentNode.parentNode.getAttribute("name");
    const result = content.filter((content) => content.id !== elementoClicado);
    setContent(result);
  };
  return (
    <section>
      {logar()}

      <div className="containerRemove">
        {content.map((content, index) => (
          <div
            key={content.id}
            name={content.id}
            className="containerContentRemove"
          >
            <div className="containerEsquerdo">
              <h1 style={{ color: `white` }} className="idRemove">
                {index + 1}
              </h1>
              <div className="containerDescricao">
                <h2 style={{ color: `white` }} className="tituloRemove">
                  {content.titulo}
                </h2>
                <p style={{ color: `white` }} className="descricaoRemove">
                  {content.descricao}
                </p>
              </div>
            </div>

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
