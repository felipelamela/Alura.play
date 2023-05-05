import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Form from "./Components/Form/Form";
import Categoria from "./Components/Categoria/Categoria";
import Destaques from "./Components/Destaques/Destaques";
import nextId from "react-id-generator";

function App() {
  const [destaque, setDestaque] = React.useState({
    id: "id1",
    titulo: `Back-End`,
    categoria: `Back-End`,
    urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
    urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
    descricao: `jsdnaljsduohasd`,
  });

  const [categorias, setCategorias] = React.useState([
    { nome: "Back-End", cor: "#088A3C" },
    { nome: `Front-End`, cor: "#1B69B6" },
    { nome: `Mobile`, cor: "#DE6F0F" },
    { nome: `DevOps`, cor: "#B6201B" },
  ]);

  const [content, setContent] = React.useState([
    {
      id: "id1",
      titulo: `dadwdas`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduoha sdjsdnaljsduohasdj sdnaljsduo hasdjsdnaljsduoh asdjsdnaljsduoha djsdnaljsduohasdjsdnaljsduohasdj sdnalj sduohasd`,
    },
    {
      id: "id2",
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id3",
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id4",
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id5",
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id6",
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id7",
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id8",
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id9",
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id10",
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id11",
      titulo: `Back-End`,
      categoria: `Front-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id12",
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id13",
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id14",
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id15",
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id16",
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id17",
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id18",
      titulo: `Back-End`,
      categoria: `DevOps`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id19",
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
    {
      id: "id20",
      titulo: `Back-End`,
      categoria: `Mobile`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao: `jsdnaljsduohasd`,
    },
  ]);

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
        id: nextId(),
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
    console.log(category);
    addNewContent({ title, category, urlVideo, urlThumbnail, description });
  };
  // <Form aoSalvar={aoSalvar} />
  // <Main content={content} categorias={categorias} />

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
    </>
  );
}

export default App;
