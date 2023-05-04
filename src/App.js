import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Form from "./Components/Form/Form";
import Categoria from "./Components/Categoria/Categoria";

function App() {
  const [categorias, setCategorias] = React.useState([
    { nome: "Back-End" },
    { nome: `Front-End` },
    { nome: `Mobile` },
    { nome: `DevOps` },
  ]);
  const [content, setContent] = React.useState([
    {
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
  ]);

  const addNewContent = ({
    title,
    category,
    urlVideo,
    urlThumbnail,
    description,
  }) => {
    setContent([
      ...content,
      {
        titulo: title,
        categoria: category,
        urlVideo: urlVideo,
        urlThumbnail: urlThumbnail,
        descricao: description,
      },
    ]);
  };

  const pagina = {
    "/": <Main />,
    "/NovoVideo": <Form />,
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
  // <Form aoSalvar={aoSalvar} />
  // <Main content={content}/>
  return (
    <>
      <Header />
      <Main content={content} categorias={categorias} />
    </>
  );
}

export default App;
