import React, {Component} from 'react';
import './Component.css'
import menu from './menu.json'; 

class Guarniciones extends Component {
  constructor() {
    super();
    this.state = {
      menu
    }
  }
    render() {
      const Menu = this.state.menu.guarniciones.map((hamburguers, i) => {
        return (
          <div className="icon-container">
            <img className="menu-icon" src={hamburguers.img} alt="Guarniciones"></img>
            <p className="product-title">{hamburguers.producto}</p>
            <p className="product-title">$ {hamburguers.precio}</p>
          </div>
        )
      })

        return ( 
            <div className="menu-container">
            <h1>GUARNICIÓN</h1>
              <p className="menu-title">+ $15</p>
              <div className="menu-container">{Menu}</div>
          </div>
            )
    }
};

export default Guarniciones;