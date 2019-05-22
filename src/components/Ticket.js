import React, {Component, Fragment} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';
import Confirm from '../images/confirmar.png';
import Cancel from '../images/cancelar_orden.png';

class Ticket extends Component{
  render(){
    return ( 
      <AppContextConsumer>
        {value => {
          return (
            <Fragment>
              <div className="ticket-box">
                <div className="ticket">Ticket
                  <div className="client-name2">{value.inputValue}</div>
                  <ul>
                    {value.buttonValue.map(element => 
                      <li key={element.id} style={{ listStyleType: "none" }} className="product-list">{element.id} 
                      </li>
                    )}
                  </ul> 
                  <div className="total">${value.buttonValue.reduce((accumulate, current)=>{
                    return accumulate + Number(current.precio);
                  }, 0.00)}</div>
                </div>
                <div>
                  <button className="ticket-buttons"><img src={Confirm} alt="Enviar"></img></button> 
                  <button className="ticket-buttons"><img src={Cancel} alt="Cancelar"></img></button>
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