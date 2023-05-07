import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

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
    <section className="containerDashboard">
      <Router>
        <div className="containerDashboardEsquerdo">
          <Link className="DashEsquerdoConteudo" to="/dashboard/Conteudo">
            Conteúdo
          </Link>

          <Link className="DashEsquerdoConteudo" to="/dashboard/NovaCategoria">
            Nova Categoria
          </Link>

          <Link className="DashEsquerdoConteudo" to="/dashboard/NovoConteudo">
            Novo Conteúdo
          </Link>
        </div>
        <div className="containerDashboardDireito">
          <Switch>
            <Route path="/dashboard/NovaCategoria">
              <NewCategory
                categorias={categorias}
                setCategorias={setCategorias}
              />
            </Route>
            <Route path="/dashboard/NovoConteudo">
              <Form aoSalvar={aoSalvar} categorias={categorias} />
            </Route>
            <Router exact path="/dashboard/Conteudo">
              <Remove content={content} setContent={setContent} />
            </Router>
          </Switch>
        </div>
      </Router>
    </section>
  );
};

export default Dashboard;
