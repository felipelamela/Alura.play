import React from "react";

function previous(event) {
  event.target.nextElementSibling.scrollLeft -= 250;
}
function next(event) {
  event.target.previousSibling.scrollLeft += 250;
}
const Main = () => {
  return (
    <main className="container">
      <button onClick={previous} className="previous">
        &#10094;
      </button>

      {/*Conteudo que ira receber objeto do video 
        Titulo // Descrição(contendo limite de palavras no sub) // img
        Criar um Array.map para gerar dinamicamente a quantidade de conteudo
        Caso der tempo, limitar a quantidade de conteudo em 5 childrens e o sexto como
        ver mais    
      */}

      <div className="mainContainer">
        <div className="mainContainerContent">
          <div className="ImagemThumbnail"></div>
          <h2>O que é React</h2>
          <p>Hoje vamos abordar o tema sobre React</p>
        </div>
        <div className="mainContainerContent">
          <div className="ImagemThumbnail"></div>
          <h2>O que é React</h2>
          <p>Hoje vamos abordar o tema sobre React</p>
        </div>
        <div className="mainContainerContent">
          <div className="ImagemThumbnail"></div>
          <h2>O que é React</h2>
          <p>Hoje vamos abordar o tema sobre React</p>
        </div>
        <div className="mainContainerContent">
          <div className="ImagemThumbnail"></div>
          <h2>O que é React</h2>
          <p>Hoje vamos abordar o tema sobre React</p>
        </div>
      </div>

      {/* ------------------------------------------ */}
      <button onClick={next} className="next">
        &#10095;
      </button>
    </main>
  );
};

export default Main;
