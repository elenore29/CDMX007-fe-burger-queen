import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../App.css';
import Toolbar from './Toolbar.js'
import Client from './Client.js';
import Breakfast from './Breakfast.js'; 
import Hamburgers from './Hamburgers.js'; 
import Specifications from './Specifications.js'; 

class Menu extends Component  {  
  render = () => {
    return(
      <Router>
        <Toolbar></Toolbar>
        <Route path="/cliente" component={Client}/> 
        <Route path="/desayuno" component={Breakfast} />
        <Route path="/hamburguesas/" component={Hamburgers} />
        <Route path="/especificaciones/" component={Specifications} />
    </Router>    
    )
  }
};

export default Menu;
