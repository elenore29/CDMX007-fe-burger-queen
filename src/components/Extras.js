import React, {Component} from 'react';
import './Component.css'
import menu from './menu.json'; 

class Extras extends Component {
  constructor() {
    super();
    this.state = {
      menu
    }
  }
    render() {
      const Menu = this.state.menu.extras.map((hamburguers, i) => {
        return (
          <div className="icon-container">
            <img className="menu-icon" src={hamburguers.img} alt="Extras"></img>
            <p className="product-title">{hamburguers.producto}</p>
            <p className="product-title">$ {hamburguers.precio}</p>
          </div>
        )
      })
   
        return ( 
            <div className="menu-container">
            <h1>EXTRAS</h1>
              <p className="menu-title">+ $15</p>
              <div className="menu-container">{Menu}</div>
          </div>
            )
    }
};

export default Extras;