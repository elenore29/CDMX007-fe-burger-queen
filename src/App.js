import React, {Component} from 'react';
import Menu from './components/Menu';
import Ticket from './components/Ticket'; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        logged: false, 
        clientName: ''
      }
      this.handleClientName = this.handleClientName.bind(this);
};

handleClientName (name){
  console.log(name)
  this.setState(
    {
      clientName: name
    }
  )
  
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
      <div>
      <Menu />
        <Ticket clientName={this.state.clientName}>{this.state.clientName}</Ticket>
      </div>
      )
  }
   else {
     return (
      <button onClick={this.handleInput2.bind(this)}>Iniciar sesión</button>
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
