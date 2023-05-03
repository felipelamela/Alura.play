import React from "react";

function handleClick(event) {
  const forme = document.querySelectorAll(".inputText");
  event.preventDefault();
  console.log(forme[0].value);

}

const Button = ({ name, addNewContent, ...props }) => {
  return (
    <button
    
      className="buttonNewContent"
      style={{ margin: "1rem 0", alignSelf: "start" }}
    >
      {name}
    </button>
  );
};

export default Button;
