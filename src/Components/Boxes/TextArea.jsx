import React from "react";

const TextArea = () => {
  return (
    <>
      <label className="labelText" htmlFor="descricao">
        Descrição
      </label>
      <textarea
        className="inputText"
        name="descricao"
        id="descricao"
        cols="30"
        rows="10"
      ></textarea>
    </>
  );
};

export default TextArea;
