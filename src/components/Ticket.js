import React, {Component, Fragment} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';
import confirm from '../images/confirmar.png';
import cancel from '../images/cancelar_orden.png';
import editBtn from '../images/editar.png';
import deleteBtn from '../images/delete.png'; 

class Ticket extends Component{
  render(){
    return ( 
      <AppContextConsumer>
        {value => {
          return (
            <Fragment>
              <div className="ticket-box">
                <div className="ticket2">
                  <div className="ticket">
                    <h4>Ticket</h4>
                    <div className="client-name2">{value.inputValue}</div>
                    <div className="list">
                      <ul>
                        {value.order.map((element, index) =>
                          <div key={index} className="product-box">
                            <li style={{ listStyleType: "none" }} className="product-quantity">{element.quantity}</li>
                            <li style={{ listStyleType: "none" }} className="product-list">{element.id}</li>
                            <li style={{ listStyleType: "none" }} className="product-price">${element.precio}</li>
                            <button className="edit-item"><img className="icon-item2" src={editBtn} alt="Editar"></img></button> 
                            <button  onClick={()=>value.delete(element, index)} className="delete-item"><img className="icon-item" src={deleteBtn} alt="Eliminar"></img></button>
                          </div>                
                        )}
                      </ul> 
                    </div>
                    <div className="total">$ {value.order.reduce((accumulate, current)=>{
                    return accumulate + current.total;}, 0.00)}</div>
                  </div>
                  <div className="cancel-confirm"> 
                    <button className="ticket-buttons"><img onClick={value.confirmOrder} src={confirm} alt="Enviar"></img></button> 
                    <button className="ticket-buttons"><img onClick={value.cancelOrder} src={cancel} alt="Cancelar"></img></button>
                  </div>
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