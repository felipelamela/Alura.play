import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Destaques from "./Components/Destaques/Destaques";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

function App() {
  const [usuario, setUsuario] = React.useState({
    nome: "admin@admin.com",
    senha: "123456",
  })
  const [categorias, setCategorias] = React.useState([
    { nome: "Back-End", cor: "#088A3C", total: 1 },
    { nome: `Front-End`, cor: "#1B69B6", total: 1 },
    { nome: `Mobile`, cor: "#DE6F0F", total: 1 },
    { nome: `DevOps`, cor: "#B6201B", total: 1 },
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

  return (
    <Router>
      <Header />
      <Login usuario={usuario}/>
      <Switch>
        <Route exact path="/">
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
        </Route>
        <Route path="/dashboard">
          <Dashboard
            aoSalvar={aoSalvar}
            categorias={categorias}
            setCategorias={setCategorias}
            content={content}
            setContent={setContent}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
