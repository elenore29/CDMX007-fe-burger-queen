import React, {Component} from 'react';
import './Component.css'
import menu from './menu.json'; 

class Bebidas extends Component {
  constructor() {
    super();
    this.state = {
      menu
    }
  }
    render() {
      const Menu = this.state.menu.bebidas.map((hamburguers, i) => {
        return (
          <div className="icon-container">
            <img className="menu-icon" src={hamburguers.img} alt="Sensilla"></img>
            <p className="product-title">{hamburguers.producto}</p>
            <p className="product-title">$ {hamburguers.precio}</p>
          </div>
        )
      })
   
        return ( 
            <div className="menu-container">
            <h1>Bebidas</h1>
              <p className="menu-title">Elige una bebida</p>
              <div className="menu-container">{Menu}</div>
          </div>
            )
    }
};

export default Bebidas;