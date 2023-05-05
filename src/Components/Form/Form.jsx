import React from "react";
import Button from "../Boxes/Button";
import Input from "../Boxes/Input";
import TextArea from "../Boxes/TextArea";
import Dropdown from "../Boxes/Dropdown";

const Form = ({ aoSalvar, categorias, ...props }) => {
  const [title, setTitle] = React.useState(``);
  const [category, setCategory] = React.useState(``);
  const [urlVideo, setUrlVideo] = React.useState(``);
  const [urlThumbnail, setUrlThumbnail] = React.useState(``);
  const [description, setDescription] = React.useState(``);

  return (
    <form
      onSubmit={(event) =>
        aoSalvar(event, title, category, urlVideo, urlThumbnail, description)
      }
      className="formNewContent"
      action=""
    >
      <h2 className="formTitulo">Novo Vídeo</h2>
      <Input
        name="Titulo"
        value={title}
        novoValor={(value) => setTitle(value)}
      />

      <Input
        name="URL - Video"
        value={urlVideo}
        novoValor={(value) => setUrlVideo(value)}
      />

      <Dropdown
        name="Categoria"
        value={category}
        novoValor={(value) => setCategory(value)}
        categorias={categorias}
      />

      <Input
        name="URL - Thumbnail"
        value={urlThumbnail}
        novoValor={(value) => setUrlThumbnail(value)}
      />
      <TextArea value={description} novoValor={(value) => setDescription(value)} />
      <Button name="Cadastrar" />
    </form>
  );
};

export default Form;


