import React, {Component} from 'react';
import './Component.css'
import menu from './menu.json'; 
import Down from '../images/abajo_1.png';
import Up from '../images/arriba.png';

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
        <div className="menu-boxes"> 
        <div className="center">
          <div className="icon-container">
            <img className="menu-icon" src={hamburguers.img} alt="Sensilla"></img>
            <p className="product-title">{hamburguers.producto}</p>
            <p className="product-title">$ {hamburguers.precio}</p>
          </div>
          <div className="arrow-box"> 
          <img className="arrow-down" src={Up} alt="Agregar"></img> 
          <img className="arrow-down" src={Down} alt="Quitar"></img></div> 
          </div>
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