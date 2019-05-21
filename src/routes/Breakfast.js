import React, {Component, Fragment} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';
import logo from '../images/logo.png';

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
                    {value.menu.desayuno.map(element => 
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


