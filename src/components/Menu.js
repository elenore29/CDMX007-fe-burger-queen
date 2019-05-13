import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
import Client from './Client.js';
import Breakfast from './Breakfast.js'; 
import Hamburgers from './Hamburgers.js'; 
import Specifications from './Specifications.js'; 
import Logout from '../images/exit.png' 

class AppRouter extends Component  {
  
  render = () => {
    return(
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

        <Route path="/cliente" component={() => <Client handleClientName={this.props.handleClientName}/>}/> 
        <Route path="/desayuno" exact component={Breakfast} />
        <Route path="/hamburguesas/" component={Hamburgers} />
        <Route path="/especificaciones/" component={Specifications} />
      </div>
    </Router>    
    )
  }
};

export default AppRouter;