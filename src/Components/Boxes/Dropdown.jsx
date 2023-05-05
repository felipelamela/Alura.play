import React from "react";

const Dropdown = ({ name, categorias, ...props }) => {
  const onDigit = (event) => {
    console.log(event.target.value);
    props.novoValor(event.target.value);
  };
  return (
    <>
      <label className="labelText" htmlFor={name}>
        {name}
      </label>

      <select
        value={props.value}
        onChange={onDigit}
        className="dropDownLabel"
        name={name}
        id={name}
      >
        <option value=""></option>
        {categorias.map((categoria) => (
          <option
            className="dropDownInput"
            key={categoria.nome}
            value={categoria.nome}
          >
            {categoria.nome}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
