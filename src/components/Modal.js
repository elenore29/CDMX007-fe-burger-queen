import React, {Component, Fragment} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';
import ok from '../images/ok.png';

class Modal extends Component{
  render(){
    return ( 
      <AppContextConsumer>
        {value => {
          return (
            <Fragment>
                <div onClick={(e) => { 
                    if(e.target.className === 'modal-container'){
                        value.toggleModal();
                    }
                }}
                     className="modal-container">
                    <div className="modal">
                        <img src={ok} alt="Ok"></img>
                        <p className="modal-title">¡LISTO! Tu pedido ha sido enviado a la cocina.</p>
                    </div>
                </div>
            </Fragment> 
          )
        }} 
      </AppContextConsumer>     
    ); 
  }
}

export default Modal; 