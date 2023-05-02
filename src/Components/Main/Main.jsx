import React from "react";

const mainContainer = document.querySelector(".mainContainer");

function previous(event) {
  mainContainer.scrollLeft -= 200;
  console.log(mainContainer.scrollLeft);
}
function next() {
  mainContainer.scrollLeft += 200;
}
const Main = () => {
  return (
    <main className="container">
      <button onClick={previous} className="previous">
        &#10094;
      </button>
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
      <button onClick={next} className="next">
        &#10095;
      </button>
    </main>
  );
};

export default Main;
