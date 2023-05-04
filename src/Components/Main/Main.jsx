import React from "react";

function previous(event) {
  event.target.nextElementSibling.scrollLeft -= 250;
}
function next(event) {
  event.target.previousSibling.scrollLeft += 250;
}

function gerarConteudo(conteudo, categoria) {
  if (conteudo === categoria) {
    return (
      <div key={conteudo.nome} className="mainContainerContent">
        <img className="ImagemThumbnail" src={conteudo.urlThumbnail} alt="" />
        <h2>{conteudo.titulo}</h2>
        <p>{conteudo.descricao}</p>
      </div>
    );
  }
}

const Main = ({ content, categorias }) => {
  return (
    <main className="container">
      {categorias.map((categoria) => (
        <div key={categoria} className="mainContainer">
          <h2>{categoria.nome}</h2>
          <button onClick={previous} className="previous">
            &#10094;
          </button>
          <div className="mainContainer">
            {content.map((conteudo) =>
              gerarConteudo(conteudo.categoria, categoria.nome)
            )}
            <div className="ImagemThumbnail"></div>
          </div>
          <button onClick={next} className="next">
            &#10095;
          </button>
        </div>
      ))}
    </main>
  );
};

export default Main;

/*

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
*/

/*

      <button onClick={previous} className="previous">
        &#10094;
      </button>

      Conteudo que ira receber objeto do video 
        Titulo // Descrição(contendo limite de palavras no sub) // img
        Criar um Array.map para gerar dinamicamente a quantidade de conteudo
        Caso der tempo, limitar a quantidade de conteudo em 5 childrens e o sexto como
        ver mais    
      

      <div className="mainContainer">
          {content.map((conteudo) => (
            <div className="mainContainerContent">
              <img
                className="ImagemThumbnail"
                src={conteudo.urlThumbnail}
                alt=""
              />
              <h2>{conteudo.titulo}</h2>
              <p>{conteudo.descricao}</p>
            </div>
          ))}
          <div className="ImagemThumbnail"></div>
        </div>

      {console.log(content)}
       ------------------------------------------ *w
      <button onClick={next} className="next">
        &#10095;
      </button>


*/
