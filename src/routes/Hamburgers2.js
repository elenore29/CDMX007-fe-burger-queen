import React, {Component} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';
import Down from '../images/abajo_1.png';
import Up from '../images/arriba.png';

class Hamburgers extends Component {
  render() {
    return (
      <AppContextConsumer>
        {value => {
          return (  
            <div className="menu-container">
              <h1>HAMBURGESAS 2</h1>
              <p className="menu-title">SENCILLA $40</p>
              <div className="menu-content"> 
                {value.menu.sencilla.map(element => 
                  <div key={element.i} className="menu-boxes"> 
                    <div className="center">
                      <div className="icon-container">
                        <img className="menu-icon" src={element.img} alt="Sensilla"></img>
                        <p className="product-title">{element.producto}</p>
                        <p className="product-title">$ {element.precio}</p>
                      </div>
                      <div className="arrow-box"> 
                        <img onClick={()=>value.add(element)} className="arrow-down" id={element.id} src={Up} alt="Agregar"></img> 
                        <img className="arrow-down" id={element.id} src={Down} alt="Quitar"></img>
                      </div> 
                    </div>
                  </div>
                )}
              </div>
              <p className="menu-title">DOBLE $55</p>
              <div className="menu-content"> 
                {value.menu.doble.map(element => 
                  <div key={element.i} className="menu-boxes"> 
                    <div className="center">
                      <div className="icon-container">
                        <img className="menu-icon" src={element.img} alt="Sensilla"></img>
                        <p className="product-title">{element.producto}</p>
                        <p className="product-title">$ {element.precio}</p>
                      </div>
                      <div className="arrow-box"> 
                        <img onClick={()=>value.add(element)} className="arrow-down" id={element.id} src={Up} alt="Agregar"></img> 
                        <img className="arrow-down" id={element.id} src={Down} alt="Quitar"></img>
                      </div> 
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        }} 
      </AppContextConsumer>
    )
  }
};

export default Hamburgers;


