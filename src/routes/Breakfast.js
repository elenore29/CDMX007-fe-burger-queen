import React, {Component, Fragment} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';
import logo from '../images/logo.png';
import Down from '../images/abajo_1.png';
import Up from '../images/arriba.png';

class Breakfast extends Component {
  render() {
    return (
      <AppContextConsumer>
        {value => {
          return (
            <Fragment>
              <div className="App">
                <header className="App-header">
                  <img className="burger-logo" src={logo} alt="Logo"></img>
                  <h1>DESAYUNOS</h1>
                  <div className="menu-content"> 
                    {value.desayuno.map(element => 
                      <div key={element.i} className="menu-boxes"> 
                        <div className="center">
                          <div className="icon-container">
                            <img className="menu-icon" src={element.img} alt="Sensilla"></img>
                            <p className="product-title">{element.producto}</p>
                            <p className="product-title">$ {element.precio}</p>
                          </div>
                          <div className="arrow-box"> 
                            <img className="arrow-down" id={element.producto} src={Up} alt="Agregar"></img> 
                            <img className="arrow-down" id={element.producto} src={Down} alt="Quitar"></img>
                          </div> 
                        </div>
                      </div>
                    )}
                  </div>
                </header>
              </div>
            </Fragment>
          )
        }} 
      </AppContextConsumer>
    )
  }
};

export default Breakfast;


