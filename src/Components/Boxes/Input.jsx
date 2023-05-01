import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({ name }) => {
  return (
    <>
      <TextField id={name} label={name} />
    </>
  );
};

export default Input;
