import React from "react";

const Input = ({ name }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type="text" id={name} />
    </>
  );
};

export default Input;
