import React, {Component} from 'react';
import '../App.css'
import menu from '../components/menu.json';  
import Down from '../images/abajo_1.png';
import Up from '../images/arriba.png';

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
        <div key={i} className="menu-boxes"> 
        <div className="center">
          <div className="icon-container">
            <img className="menu-icon" src={hamburguers.img} alt="Sensilla"></img>
            <p className="product-title">{hamburguers.producto}</p>
          </div>
          <div className="arrow-box"> 
          <img className="arrow-down" src={Up} alt="Agregar"></img> 
          <img className="arrow-down" src={Down} alt="Quitar"></img></div> 
          </div>
          </div>
        )
      })
      const Menu2 = this.state.menu.doble.map((hamburguers, i) => {
        return (
            <div key={i} className="menu-boxes"> 
            <div className="center">
              <div className="icon-container">
                <img className="menu-icon" src={hamburguers.img} alt="Sensilla"></img>
                <p className="product-title">{hamburguers.producto}</p>
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
            <h1>HAMBURGESAS 2</h1>
              <p className="menu-title">SENCILLA $40</p>
              <div className="menu-container">{Menu}</div>
              <p className="menu-title">DOBLE $55</p>
              <div className="menu-container">{Menu2}</div>
          </div>
            )
    }
};

export default Hamburgers;


