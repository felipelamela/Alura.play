import React from "react";
import InputNewCategory from "../Boxes/InputNewCategory";

const NewCategory = ({ categorias, setCategorias }) => {
  const [nomeCategoria, setNomeCategoria] = React.useState(``);
  const [corCategoria, setCorCategoria] = React.useState(``);

  const createNewCategory = (event) => {
    event.preventDefault();
    setCategorias([
      ...categorias,
      {
        nome: nomeCategoria,
        cor: corCategoria,
        total: 0
      },
    ]);
  };

  return (
    <div>
      <form
        className="formNewContent"
        onSubmit={(event) => createNewCategory(event)}
      >
        <h2 className="formTitulo">Nova Categoria</h2>
        <InputNewCategory
          name="Nome"
          value={nomeCategoria}
          novoDado={(value) => setNomeCategoria(value)}
        />
        <InputNewCategory
          name="Cor"
          value={corCategoria}
          type="color"
          novoDado={(value) => setCorCategoria(value)}
          className="inputCor"
        />
        <button className="buttonNewContent newCategoryButton">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default NewCategory;
