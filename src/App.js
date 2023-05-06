import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Form from "./Components/Form/Form";
import Destaques from "./Components/Destaques/Destaques";
import Remove from "./Components/Remove/Remove";
import NewCategory from "./Components/NewCategory/NewCategory";
import AdmArea from "./Components/AdmArea/AdmArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [categorias, setCategorias] = React.useState([
    { nome: "Back-End", cor: "#088A3C" },
    { nome: `Front-End`, cor: "#1B69B6" },
    { nome: `Mobile`, cor: "#DE6F0F" },
    { nome: `DevOps`, cor: "#B6201B" },
  ]);

  const [content, setContent] = React.useState([
    {
      id: uuidv4(),
      titulo: `dadwdas`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduoha sdjsdnaljsduohasdj sdnaljsduo hasdjsdnaljsduoh asdjsdnaljsduoha djsdnaljsduohasdjsdnaljsduohasdj sdnalj sduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: uuidv4(),
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
  ]);

  const [destaque, setDestaque] = React.useState(content[0]);

  const addNewContent = ({
    id,
    title,
    category,
    urlVideo,
    urlThumbnail,
    description,
  }) => {
    setContent([
      ...content,
      {
        id: uuidv4(),
        titulo: title,
        categoria: category,
        urlVideo: urlVideo,
        urlThumbnail: urlThumbnail,
        descricao: description,
      },
    ]);
  };

  const aoSalvar = (
    event,
    title,
    category,
    urlVideo,
    urlThumbnail,
    description
  ) => {
    event.preventDefault();
    addNewContent({ title, category, urlVideo, urlThumbnail, description });
  };

  const paginas = {
    "/": <Main />,
    "/NovoVideo":<Form aoSalvar={aoSalvar} categorias={categorias} />,

    "/EditarVideo":<Remove content={content} setContent={setContent} />,

    "/NovaCategoria":  <NewCategory categorias={categorias} setCategorias={setCategorias} />,

  };

  return (
    <>
      <Header />
      <Destaques
        idDestaque={destaque.id}
        content={content}
        categorias={categorias}
      />

      <Main
        setDestaque={setDestaque}
        content={content}
        categorias={categorias}
      />
      <Form aoSalvar={aoSalvar} categorias={categorias} />

      <Remove content={content} setContent={setContent} />

      <NewCategory categorias={categorias} setCategorias={setCategorias} />

      <AdmArea paginas={paginas}/>
    </>
  );
}

export default App;
