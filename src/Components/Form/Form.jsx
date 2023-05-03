import React from "react";
import Button from "../Boxes/Button";
import Input from "../Boxes/Input";
import TextArea from "../Boxes/TextArea";

const Form = ({ addNewContent }) => {
  return (
    <form className="formNewContent" action="">
      <h2 className="formTitulo">Novo Vídeo</h2>
      <Input name="Titulo" />
      <Input name="Categoria" type="email" />
      <Input name="URL - Video" />
      <Input name="URL - Thumbnail" />
      <TextArea />
      <Button name="Cadastrar" />
    </form>
  );
};

export default Form;
