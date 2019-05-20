import React, {Component} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';

class Input extends Component {
    render() {
        return ( 
            <AppContextConsumer>
                {value => {
                    return (  
                        <div>
                            <input className="client-name" placeholder=" Nombre del cliente" type="text"  onChange={value.handleInput} value={value.inputValue} ></input>
                        </div>
                    )
                }} 
            </AppContextConsumer>
        )
    }
}
    
export default Input;

 


 