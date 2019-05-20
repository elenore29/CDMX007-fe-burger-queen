import React, {Component, Fragment} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css'

class Ticket extends Component{
  render(){
    return ( 
      <AppContextConsumer>
          {value => {
            console.log(value.buttonValue)
    return (
      <Fragment>
        <div className="ticket-box">
          <div className="ticket">Ticket
          <div className="client-name2">{value.inputValue}</div>
           <ul>
            {value.buttonValue.map(element => 
              <li style={{ listStyleType: "none" }} className="product-list">{element}</li>
              )}
            </ul> 
            <div className="total">$0.00</div>
          </div>
        </div>
      </Fragment> 
          )
        }} 
    </AppContextConsumer>     
    ); 
  }
}

export default Ticket; 