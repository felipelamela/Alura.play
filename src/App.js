import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Form from "./Components/Form/Form";

function App() {
  const [categoria, setCategoria] = React.useState([
    `Back-End`,
    `Front-End`,
    `mobile`,
    `DevOps`,
  ]);
  const [content, setContent] = React.useState([
    {
      titulo: `Back-End`,
      categoria: `Back-End`,
      urlVideo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      urlThumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
      descricao:`jsdnaljsduohasd`
    }

  ]);

  const addNewContent = ({
    title,
    category,
    urlVideo,
    urlThumbnail,
    description,
  }) => {
    setContent({
      titulo: title,
      categoria: category,
      urlVideo: urlVideo,
      urlThumbnail: urlThumbnail,
      descricao: description,
    });
  };

  const pagina = {
    "/": <Main />,
    "/Formulario": <Form />,
  };


  const aoSalvar = (event, title, category, urlVideo, urlThumbnail, description) => {
    event.preventDefault();
    addNewContent({title, category, urlVideo, urlThumbnail, description})
    console.log(title);
    console.log(category);
    console.log(urlVideo);
    console.log(urlThumbnail);
    console.log(description);
  };

  return (
    <>
    {console.log(content)}
      <Header />
      <Form aoSalvar={aoSalvar}/>
    </>
  );
}

export default App;
