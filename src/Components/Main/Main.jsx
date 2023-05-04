import React from "react";
import ButtonScroll from "../Boxes/ButtonScroll";

function gerarConteudo(conteudo, categoria) {
  if (conteudo.categoria === categoria) {
    return (
      <div key={conteudo.nome} className="containerContent">
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
        <div key={categoria} className="mainContainerPrimary">
          <h2
            className="category"
            style={{ borderBottom: `2px solid ${categoria.cor}` }}
          >
            {categoria.nome}
          </h2>
          <div className="mainContainer">
            <ButtonScroll name="❮" className="previous" />
            <div className="containerAllContent">
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
