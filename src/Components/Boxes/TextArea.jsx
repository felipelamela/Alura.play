import React from "react";

const TextArea = (props) => {
  const onDigit = (event) => {
    props.novoValor(event.target.value);
  };

  return (
    <>
      <label className="labelText" htmlFor="descricao">
        Descrição
      </label>
      <textarea
        className="inputText"
        name="descricao"
        value={props.description}
        onChange={onDigit}
        id="descricao"
        cols="30"
        rows="10"
      ></textarea>
    </>
  );
};

export default TextArea;
