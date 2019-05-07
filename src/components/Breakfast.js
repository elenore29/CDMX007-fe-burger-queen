import React, {Component} from 'react';
import './Client.css';
import './Component.css'
import logo from '../images/logo.png';
import Ticket from './Ticket.js';
import menu from './menu.json'; 

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
          <div className="icon-container">
            <img className="menu-icon" src={hamburguers.img} alt="Sensilla"></img>
            <p className="product-title">{hamburguers.producto}</p>
            <p className="product-title">$ {hamburguers.precio}</p>
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
            <Ticket></Ticket>
          </div>
            )
    }
};

export default Breakfast;