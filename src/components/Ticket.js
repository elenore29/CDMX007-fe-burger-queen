import React, {Component, Fragment} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';
import confirm from '../images/confirmar.png';
import cancel from '../images/cancelar_orden.png';
import editBtn from '../images/editar.png';
import deleteBtn from '../images/delete.png'; 
import Modal from './Modal.js';
import ModalToCancel from './Modal2.js'; 
import OnAlert from './OnAlert.js';
import OnAlert2 from './OnAlert2.js';
import OnAlert3 from './OnAlert3.js';
import OnAlert4 from './OnAlert4.js';

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
                    {value.onAlert && <OnAlert />}
                    {value.onAlert2 && <OnAlert2 />}
                    {value.onAlert3 && <OnAlert3 />}
                    {value.onAlert4 && <OnAlert4 />}
                    <div className="client-name2">{value.inputValue}</div>
                    <div className="list">
                      <ul>
                        {value.order.map((element, index) =>
                          <div key={index} className="product-box">
                            <li style={{ listStyleType: "none" }} className="product-quantity">{element.quantity}</li>
                            <li style={{ listStyleType: "none" }} className="product-list">{element.id}</li>
                            <li style={{ listStyleType: "none" }} className="product-price">${element.precio}</li>
                            {element.type === 'Burger' ?
                            <button className="edit-item"><img className="icon-item2" src={editBtn} alt="Editar"></img></button> : null}
                            <button  onClick={()=>value.delete(element, index)} className="delete-item"><img className="icon-item" src={deleteBtn} alt="Eliminar"></img></button>
                          </div>                
                        )}
                      </ul> 
                    </div>
                    <div className="total">$ {value.order.reduce((accumulate, current)=>{
                    return accumulate + current.total;}, 0.00)}</div>
                  </div>
                  <div className="cancel-confirm"> 
                    <button className="ticket-buttons"><img className="btn" onClick={value.cancelOrder} src={cancel} alt="Cancelar"></img></button>
                    <button className="ticket-buttons"><img className="btn" onClick={value.confirmOrder} src={confirm} alt="Enviar"></img></button> 
                  </div>
                </div>
              </div>
              {value.isModalOpen && <Modal />}
              {value.isModalOpen2 && <ModalToCancel />}
            </Fragment> 
          )
        }} 
      </AppContextConsumer>     
    ); 
  }
}

export default Ticket; 