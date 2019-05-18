import React, {Component} from 'react';
import '../App.css'
import logo from '../images/logo.png';
import Minimenu from './Minimenu.js'; 

class Hamburgers extends Component {
    render() {
        return ( 
            <div className="App">
            <header className="App-header">
              <img className="burger-logo" src={logo} alt="Logo"></img>
              <Minimenu></Minimenu>
            </header>
          </div>
            )
    }
};

export default Hamburgers;