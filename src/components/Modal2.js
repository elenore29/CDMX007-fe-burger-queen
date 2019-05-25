import React, {Component, Fragment} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';
import cancel from '../images/salir.png';

class ModalToCancel extends Component{
  render(){
    return ( 
      <AppContextConsumer>
        {value => {
          return (
            <Fragment>
                <div onClick={(e) => { 
                    if(e.target.className === 'modal-container'){
                        value.toggleModal2();
                    }
                }}
                     className="modal-container">
                    <div className="modal">
                        <img src={cancel} alt="Ok"></img>
                        <p className="modal-title">¡OK! Tu pedido ha sido cancelado.</p>
                    </div>
                </div>
            </Fragment> 
          )
        }} 
      </AppContextConsumer>     
    ); 
  }
}

export default ModalToCancel; 