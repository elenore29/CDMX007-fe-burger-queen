import React, {Component} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css'

class Guarniciones extends Component {
  render() {
    return ( 
      <AppContextConsumer>
        {value => {
          return ( 
            <div className="menu-container">
              <h1>GUARNICIÓN</h1>
              <div className="menu-content"> 
                {value.menu.guarniciones.map(element => 
                  <div key={element.id} className="menu-boxes"> 
                    <div className="center">
                      <div onClick={()=>value.add(element)} className="icon-container">
                        <img className="menu-icon" src={element.img} alt="Sensilla"></img>
                        <p className="product-title">{element.producto}</p>
                        <p className="product-title">$ {element.precio}</p>
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

export default Guarniciones;