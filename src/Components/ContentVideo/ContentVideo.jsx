import React from "react";

const ContentVideo = ({ conteudo }) => {
  return (
    <div id={conteudo.id} className="containerContent">
      <img className="ImagemThumbnail" src={conteudo.urlThumbnail} alt="" />
      <h2 className="contentTitle">{conteudo.titulo}</h2>
      <p className="contentDescription">{conteudo.descricao}</p>
    </div>
  );
};

export default ContentVideo;
