import React, {Component} from 'react';
import './Client.css';
import './Component.css'
import logo from '../images/logo.png';
import menu from './menu.json'; 
import Down from '../images/abajo_1.png';
import Up from '../images/arriba.png';

class Breakfast extends Component {
  constructor() {
    super();
    this.state = {
      menu
    }
  }
    render() {
      const Menu = this.state.menu.desayuno.map((hamburguers, i) => {
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
            <div className="App">
            <header className="App-header">
              <img className="burger-logo" src={logo} alt="Logo"></img>
              <h1>DESAYUNOS</h1>
              <div className="menu-container">{Menu}</div>
            </header>
          </div>
            )
    }
};

export default Breakfast;