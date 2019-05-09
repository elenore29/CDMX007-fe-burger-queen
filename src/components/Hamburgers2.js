import React, {Component} from 'react';
import './Component.css'
import menu from './menu.json'; 

class Hamburgers extends Component {
  constructor() {
    super();
    this.state = {
      menu
    }
  }
    render() {
      const Menu = this.state.menu.sencilla.map((hamburguers, i) => {
        return (
          <div className="icon-container">
            <img className="menu-icon" src={hamburguers.img} alt="Sensilla"></img>
            <p className="product-title">{hamburguers.producto}</p>
          </div>
        )
      })
      const Menu2 = this.state.menu.doble.map((hamburguers, i) => {
        return (
          <div className="icon-container">
            <img className="menu-icon" src={hamburguers.img} alt="Doble"></img>
            <p className="product-title">{hamburguers.producto}</p>
          </div>
        )
      })
        return ( 
            <div className="menu-container">
            <h1>HAMBURGESAS</h1>
              <p className="menu-title">SENCILLA $40</p>
              <div className="menu-container">{Menu}</div>
              <p className="menu-title">DOBLE $55</p>
              <div className="menu-container">{Menu2}</div>
          </div>
            )
    }
};

export default Hamburgers;


