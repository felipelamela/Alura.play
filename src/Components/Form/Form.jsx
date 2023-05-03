import React from "react";
import Button from "../Boxes/Button";
import Input from "../Boxes/Input";
import TextArea from "../Boxes/TextArea";

const Form = ({aoSalvar, ...props}) => {
  const [title, setTitle] = React.useState(``);
  const [category, setCategory] = React.useState(``);
  const [urlVideo, setUrlVideo] = React.useState(``);
  const [urlThumbnail, setUrlThumbnail] = React.useState(``);
  const [description, setDescription] = React.useState(``);


  return (
    <form onSubmit={(event) => aoSalvar(event, title, category, urlVideo, urlThumbnail, description)} className="formNewContent" action="">
      <h2 className="formTitulo">Novo Vídeo</h2>
      <Input name="Titulo" value={title} onChan={(value) => setTitle(value)} />
      <Input
        name="Categoria"
        value={category}
        onChan={(value) => setCategory(value)}
      />
      <Input
        name="URL - Video"
        value={urlVideo}
        onChan={(value) => setUrlVideo(value)}
      />
      <Input
        name="URL - Thumbnail"
        value={urlThumbnail}
        onChan={(value) => setUrlThumbnail(value)}
      />
      <TextArea value={description} onChan={(value) => setDescription(value)} />
      <Button name="Cadastrar" />
    </form>
  );
};

export default Form;
