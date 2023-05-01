import React from "react";
import Button from "../Boxes/Button";
import Input from "../Boxes/Input";
import FormControl from "@mui/material/FormControl";

const Form = () => {
  return (
    <FormControl sx={{width: "600px"}}>
      <Input name="Nome" />
      <Input name="Email" />
      <Input name="Senha" />
    </FormControl>
  );
};

export default Form;
