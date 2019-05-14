import React, {Component} from 'react';
import Menu from './components/Menu';
import './App.css';
import logo from './images/logo.png'
import './components/Client.css'; 

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
      <Menu />
      )
  }
   else {
     return (
      <div className="back-login">
      <img className="burger-logo" src={logo}></img>
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
