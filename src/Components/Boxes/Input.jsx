import React from "react";

const Input = ({ name, ...props }) => {
  return (
    <>
      <label className="labelText" htmlFor={name}>
        {name}
      </label>
      <input className="inputText" type="text" id={name} {...props} />
    </>
  );
};

export default Input;
