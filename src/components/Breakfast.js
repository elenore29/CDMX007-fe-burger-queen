import React, {Component} from 'react';
import './Client.css';
import logo from '../images/logo.png';
import Ticket from './Ticket.js'

class Breakfast extends Component {
    render() {
        return ( 
            <div className="App">
            <header className="App-header">
              <img className="burger-logo" src={logo} alt="Logo"></img>
              <h1>Desayuno</h1>
            </header>
            <Ticket></Ticket>
          </div>
            )
    }
}

export default Breakfast;