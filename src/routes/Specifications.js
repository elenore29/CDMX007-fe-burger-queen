import React, {Component} from 'react';
import '../App.css'
import menu from '../components/menu.json'; 
import logo from '../images/logo.png';
import add from '../images/agregar.png';
import remove from '../images/quitar.png'; 

class Specifications extends Component {
  constructor() {
    super();
    this.state = {
      menu
    }
  }
    render() {
      const Menu = this.state.menu.especificaciones.map((hamburguers, i) => {
        return (
          <div key={i} className="menu-boxes"> 
          <div className="center">
            <div className="icon-container">
              <img className="menu-icon" src={hamburguers.img} alt="Sensilla"></img>
              <p className="product-title">{hamburguers.producto}</p>
            </div>
           
            </div>
            </div>
        )
      })
        return ( 
            <div className="App">
            <header className="App-header">
              <img className="burger-logo" src={logo} alt="Logo"></img>
              <h1>ESPECIFICACIONES</h1>
              <p className="menu-title">Selecciona para agregar porción extra o quitar</p>
              <div className="menu-container">{Menu}</div>
              <div> 
              <img className="add-icon" src={add} alt="Agregar"></img>
              <img className="add-icon" src={remove} alt="Quitar"></img>
              </div>
            </header>
          </div>
            )
    }
};

export default Specifications;