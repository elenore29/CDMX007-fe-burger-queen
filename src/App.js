import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Client from './components/Client.js'

const Cliente = () => {
  return <Client></Client>; 
}

const Desayuno = () => {
  return <h2>Desayuno</h2>; 
}

const Hamburguesas = () => {
  return <h2>Hamburguesas</h2>;
}

const Especificaciones = () => {
  return <h2>Especificaciones</h2>;
}

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav className="nav-box">
          <ul>
            <li style={{ listStyleType: "none" }}>
              <Link to="/cliente/" className="menu-link">Cliente</Link>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Link to="/desayuno/" className="menu-link">Desayuno</Link>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Link to="/hamburguesas/" className="menu-link">Hamburguesas</Link>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Link to="/especificaciones/" className="menu-link">Especificaciones</Link>
            </li>
          </ul>
        </nav>

        <Route path="/cliente/" component={Cliente} />
        <Route path="/desayuno" exact component={Desayuno} />
        <Route path="/hamburguesas/" component={Hamburguesas} />
        <Route path="/especificaciones/" component={Especificaciones} />
      </div>
    </Router>    
  );
}

export default AppRouter;