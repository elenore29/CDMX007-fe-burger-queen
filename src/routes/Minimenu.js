import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hamburgers from '../routes/Hamburgers2.js'; 
import Drinks from './Drinks.js';
import Garnish from './Garnish.js'; 
import Extra from './Extra.js'; 
import fries from '../images/french_fries.png';
import soda from '../images/refresco.png';
import egg from '../images/blue_egg.png'; 
import burger from '../images/blue_burger.png'; 

const MiniRouter = () => {
  return (
    <Router>
      <div className="mini-menu">
        <Route exact path="/hamburguesas" component={Hamburgers} />
        <Route path="/hamburguesas/bebidas" exact component={Drinks} />
        <Route path="/hamburguesas/guarniciones/" component={Garnish} />
        <Route path="/hamburguesas/extras/" component={Extra} />
        <nav className="mini-menu2">
          <ul className="mini">
            <li className="mini-icon" style={{ listStyleType: "none" }}>
              <Link to="/hamburguesas/" ><img className="mini-icon2" src={burger} alt="Hamburguesas"></img></Link>
            </li>
            <li className="mini-icon" style={{ listStyleType: "none" }}>
              <Link to="/hamburguesas/bebidas/"><img className="mini-icon2" src={soda} alt="Bebidas"></img></Link>
            </li>
            <li className="mini-icon" style={{ listStyleType: "none" }}>
              <Link to="/hamburguesas/guarniciones/"><img className="mini-icon2" src={fries} alt="Guarniciones"></img></Link>
            </li>
            <li className="mini-icon" style={{ listStyleType: "none" }}>
              <Link to="/hamburguesas/extras/"><img className="mini-icon2" src={egg} alt="Extras"></img></Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>    
  );
}

export default MiniRouter;