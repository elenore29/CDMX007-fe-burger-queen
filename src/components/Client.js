import React, {Component} from 'react';
import './Client.css';
import logo from '../images/logo.png';

class Client extends Component {

  constructor(props) {
    super(props)
      this.state = {
        text: ''
      }
      this.handleInput = this.handleInput.bind(this)
  };
    
  handleInput(event){
    const valor = event.target.value;

      this.setState({
        text: valor
      });
/*       this.props.handleClientName(this.state.text) 
 */  }

  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <img className="burger-logo" src={logo} alt="Logo"></img>
          <h1>NOMBRE</h1>
          <div>
            <input handleClientName={this.props.handleClientName} className="client-name" placeholder=" Nombre del cliente" type="text" onChange={this.handleInput} value={this.state.text}></input>
            <div className="client-name2">{this.state.text}</div>
          </div>
{/*               <Input handleClientName={this.props.handleClientName}></Input>
 */}            
        </header>
      </div>
    )
  }
}

export default Client;