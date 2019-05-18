import './App.css'
import Menu from './routes/index.js'
import Ticket from './components/Ticket.js'
import logo from './images/logo.png'
import React, { Component} from 'react';
import {AppContextProvider} from './store/index.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        logged: false, 
        clientName: ''
      }
};

handleInput2(event) {
  this.setState({
    logged: true
  })
}

handleRender() {
  console.log(this.state.logged)
  if(this.state.logged) {
    return ( 
      <AppContextProvider>
        <Menu></Menu>
        <Ticket clientName={this.state.clientName}></Ticket>
      </AppContextProvider>
      )
  }
   else {
     return (
      <div className="back-login">
      <img className="burger-logo" src={logo} alt="Logo"></img>
        <button className="login" onClick={this.handleInput2.bind(this)}>Iniciar sesión</button>
      </div>
     ); 
   }
}

  render() {
      return ( 
        <div>{this.handleRender()}</div>
        )
      //return this.state.data ? <Menu></Menu> : 'trayendo data...';
  }
} 

export default App;
