import React, {Component} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css'
import Down from '../images/abajo_1.png';
import Up from '../images/arriba.png';

class Extras extends Component {
  render() {
    return ( 
      <AppContextConsumer>
        {value => {
          return ( 
            <div className="menu-container">
              <h1>EXTRAS</h1>
              <p className="menu-title">+ $15</p>
              <div className="menu-content"> 
                {value.menu.extras.map(element => 
                  <div key={element.i} className="menu-boxes"> 
                    <div className="center">
                      <div className="icon-container">
                        <img className="menu-icon" src={element.img} alt="Sensilla"></img>
                        <p className="product-title">{element.producto}</p>
                        <p className="product-title">$ {element.precio}</p>
                      </div>
                      <div className="arrow-box"> 
                        <img onClick={()=>value.add(element)} className="arrow-down" id={element.id} src={Up} alt="Agregar"></img> 
                        <img className="arrow-down" id={element.producto} src={Down} alt="Quitar"></img>
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

export default Extras;