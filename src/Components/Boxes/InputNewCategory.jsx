import React from "react";

const InputNewCategory = ({ name, novoDado, value, ...props }) => {
  const digit = (event) => {
    novoDado(event.target.value);
  };

  return (
    <>
      <label className="labelText" htmlFor={name}>
        {name}
      </label>
      <input value={value} onChange={digit} type="text" id={name} {...props} />
    </>
  );
};

export default InputNewCategory;
