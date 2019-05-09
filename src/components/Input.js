import React, {Component} from 'react';
import './Client.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
          }
    };
    
    handleInput(event){
        const valor = event.target.value;
        console.log(valor); 
        this.setState({
            value: valor
        });
    }
    render() {
        return ( 
            <div>
            <input className="client-name" placeholder=" Nombre del cliente" type="text" onChange={this.handleInput.bind(this)} value={this.value}></input>
            <div className="client-name2">{this.state.value}</div>
            </div>
            )
    }
}

export default Input;
