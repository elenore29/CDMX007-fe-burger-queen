import React, {Component} from 'react';
import './Client.css';
import logo from '../images/logo.png';
import Ticket from './Ticket.js';



class Client extends Component {
    render() {
        return ( 
            <div className="App">
            <header className="App-header">
              <img className="burger-logo" src={logo} alt="Logo"></img>
              <h1>NOMBRE</h1>
              <input className="client-name" type="text" placeholder=" Nombre del cliente"></input>
            </header>
            <Ticket></Ticket>
          </div>
            )
    }
}

export default Client;