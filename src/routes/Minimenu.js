import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hamburgers from '../routes/Hamburgers2.js'; 
import Drinks from './Bebidas.js';
import Guarniciones from './Guarniciones.js'; 
import Extras from './Extras.js'; 
import Fries from '../images/french_fries.png';
import Soda from '../images/refresco.png';
import Egg from '../images/blue_egg.png'; 
import Burger from '../images/blue_burger.png'; 

const MiniRouter = () => {
  return (
    <Router>
      <div className="mini-menu">
        <Route path="/hamburguesas" component={Hamburgers} />
        <Route path="/bebidas" exact component={Drinks} />
        <Route path="/guarniciones/" component={Guarniciones} />
        <Route path="/extras/" component={Extras} />
        <nav className="mini-menu2">
          <ul className="mini">
            <li className="mini-icon" style={{ listStyleType: "none" }}>
              <Link to="/hamburguesas/" ><img className="mini-icon2" src={Burger} alt="Hamburguesas"></img></Link>
            </li>
            <li className="mini-icon" style={{ listStyleType: "none" }}>
              <Link to="/bebidas/"><img className="mini-icon2" src={Soda} alt="Bebidas"></img></Link>
            </li>
            <li className="mini-icon" style={{ listStyleType: "none" }}>
              <Link to="/guarniciones/"><img className="mini-icon2" src={Fries} alt="Guarniciones"></img></Link>
            </li>
            <li className="mini-icon" style={{ listStyleType: "none" }}>
              <Link to="/extras/"><img className="mini-icon2" src={Egg} alt="Extras"></img></Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>    
  );
}

export default MiniRouter;