import React, {Component} from 'react';
import './Client.css';
import logo from '../images/logo.png';
import Input from './Input.js'; 

class Client extends Component {
  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <img className="burger-logo" src={logo} alt="Logo"></img>
          <h1>NOMBRE</h1>
          <Input handleClientName={this.props.handleClientName}></Input>            
        </header>
      </div>
    )
  }
}

export default Client;