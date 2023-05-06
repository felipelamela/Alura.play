import React from "react";

const AdmArea = ({ paginas }) => {
  const Pagina = paginas["/NovoVideo"];
  return (
    <section>

      <button>Nova Categoria</button>
      <button>Conteúdo</button>
      <button>Novo Conteudo</button>

    </section>
  );
};

export default AdmArea;
