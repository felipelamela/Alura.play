import React from "react";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Form from "./Components/Form/Form";

function App() {
  const [content, setContent] = useState(null);

  const addNewContent = ({
    titulo,
    categoria,
    urlVideo,
    urlThumbnail,
    descricao,
  }) => {
    setContent({
      titulo: titulo,
      categoria: categoria,
      urlVideo: urlVideo,
      urlThumbnail: urlThumbnail,
      descricao: descricao,
    });
  };

  const pagina = {
    "/": <Main />,
    "/Formulario": <Form />,
  };

  return (
    <>
      <Header />
      <Form newContent={addNewContent} />
    </>
  );
}

export default App;
