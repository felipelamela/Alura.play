import React from "react";

function previous(event) {
  event.target.nextElementSibling.scrollLeft -= 250

}
function next(event) {
  event.target.previousSibling.scrollLeft += 250;

}

function scrollDirection(event, direction) {
  if (direction == "❮") {
    return previous(event);
  } else {
    return next(event);
  }
}

const ButtonScroll = ({ name, ...props }) => {
  return (
    <button onClick={(event) => scrollDirection(event, name)} {...props}>
      {name}
    </button>
  );
};

export default ButtonScroll;
