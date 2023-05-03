import React from "react";

const Input = ({ name,value, ...props }) => {

  const onDigit = (event) =>{
    props.onChan(event.target.value);
  }

  return (
    <>
      <label className="labelText" htmlFor={name}>
        {name}
      </label>
      <input value={value} onChange={onDigit} className="inputText" type="text" id={name} {...props} />
    </>
  );
};

export default Input;
