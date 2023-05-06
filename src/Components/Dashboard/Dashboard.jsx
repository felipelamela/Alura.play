import React from "react";
import NewCategory from "../NewCategory/NewCategory";
import Form from "../Form/Form";
import Remove from "../Remove/Remove";

const Dashboard = ({
  paginas,
  aoSalvar,
  categorias,
  setCategorias,
  content,
  setContent,
}) => {
  return (
    <section>
      <button>Nova Categoria</button>
      <button>Conteúdo</button>
      <button>Novo Conteudo</button>

      <Form aoSalvar={aoSalvar} categorias={categorias} />

      <Remove content={content} setContent={setContent} />

      <NewCategory categorias={categorias} setCategorias={setCategorias} />
    </section>
  );
};

export default Dashboard;
