import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import NewCategory from "../NewCategory/NewCategory";
import Form from "../Form/Form";
import Remove from "../Remove/Remove";

const Dashboard = ({
  userLog,
  aoSalvar,
  categorias,
  setCategorias,
  content,
  setContent,
  setUserLog,
}) => {
  return (
    <section className="containerDashboard">
      <Router>
        {console.log(userLog)}
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
              <Form
                aoSalvar={aoSalvar}
                categorias={categorias}
                setCategorias={setCategorias}
              />
            </Route>
            <Router exact path="/dashboard/Conteudo">
              <Remove
                setUserLog={setUserLog}
                content={content}
                setContent={setContent}
              />
            </Router>
          </Switch>
        </div>
      </Router>
    </section>
  );
};

export default Dashboard;
