import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Client from './components/Client.js';
import Breakfast from './components/Breakfast.js'; 
import Hamburgers from './components/Hamburgers.js'; 
import Specifications from './components/Specifications.js'; 
import Logout from './images/logout-icon.png' 

const Cliente = () => {
  return <Client></Client>; 
}

const Desayuno = () => {
  return <Breakfast></Breakfast>; 
}

const Hamburguesas = () => {
  return <Hamburgers></Hamburgers>;
}

const Especificaciones = () => {
  return <Specifications></Specifications>;
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
            <li style={{ listStyleType: "none" }}>
              <Link to="/" className="menu-link"><img className="logout" src={Logout} alt="Cerrar Sesión"></img></Link>
            </li>
          </ul>
        </nav>

        <Route path="/cliente" component={Cliente} />
        <Route path="/desayuno" exact component={Desayuno} />
        <Route path="/hamburguesas/" component={Hamburguesas} />
        <Route path="/especificaciones/" component={Especificaciones} />
      </div>
    </Router>    
  );
}

export default AppRouter;