import React, {Component} from 'react';
import '../App.css'
import menu from '../components/menu.json'; 
import logo from '../images/logo.png';
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
          <div key={i} className="menu-boxes"> 
        <div className="center">
          <div className="icon-container">
            <img className="menu-icon" src={hamburguers.img} alt="Sensilla"></img>
            <p className="product-title">{hamburguers.producto}</p>
            <p className="product-title">$ {hamburguers.precio}</p>
          </div>
          <div className="arrow-box"> 
          <img className="arrow-down" id={hamburguers.producto} src={Up} alt="Agregar"></img> 
          <img className="arrow-down" id={hamburguers.producto} src={Down} alt="Quitar"></img></div> 
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