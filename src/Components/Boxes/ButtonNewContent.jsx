import React from "react";

const ButtonNewContent = ({ name, ...props }) => {
  return (
    <button className="buttonNewContent" {...props}>
      {name}
    </button>
  );
};

export default ButtonNewContent;
