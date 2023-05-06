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
      },
    ]);
  };

  return (
    <div>
      <form onSubmit={(event) => createNewCategory(event)}>
        <InputNewCategory
          name="Nova Categoria"
          value={nomeCategoria}
          novoDado={(value) => setNomeCategoria(value)}
        />
        <InputNewCategory
          name="Cor"
          value={corCategoria}
          type="color"
          novoDado={(value) => setCorCategoria(value)}
        />
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default NewCategory;
