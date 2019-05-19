import React, {Component} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';
import logo from '../images/logo.png';
import add from '../images/agregar.png';
import remove from '../images/quitar.png'; 

class Specifications extends Component {
  render() {
    return ( 
      <AppContextConsumer>
        {value => {
          return ( 
            <div className="App">
              <header className="App-header">
                <img className="burger-logo" src={logo} alt="Logo"></img>
                <h1>ESPECIFICACIONES</h1>
                <p className="menu-title">Selecciona para agregar porción extra o quitar</p>
                <div className="menu-content"> 
                  {value.especificaciones.map(element => 
                    <div className="menu-boxes"> 
                      <div className="center">
                        <div className="icon-container">
                          <img className="menu-icon" src={element.img} alt="Sensilla"></img>
                          <p className="product-title">{element.producto}</p>
                        </div>  
                      </div>
                    </div>
                  )}
                </div>
                <div> 
                  <img className="add-icon" src={add} alt="Agregar"></img>
                  <img className="add-icon" src={remove} alt="Quitar"></img>
                </div>
              </header>
            </div>
          )
        }} 
      </AppContextConsumer>
    )   
  }
};

export default Specifications;