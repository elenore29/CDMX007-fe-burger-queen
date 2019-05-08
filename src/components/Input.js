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
        console.log(event.target.value)
        this.setState({
            value: event.target.value
        });
    }
    render() {
        return ( 
            <input className="client-name" placeholder=" Nombre del cliente" type="text" onChange={this.handleInput.bind(this)} value={this.defaultValue}></input>
            )
    }
}

export default Input;
