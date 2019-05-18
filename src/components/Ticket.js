import {AppContextConsumer} from '../store/index.js'
import React, {Component, Fragment} from 'react';
import '../App.css'

class Ticket extends Component{
   render(){
      return (
         <AppContextConsumer>
           {value => {
             return (
               <Fragment>
                <div className="ticket-box">
                    <div className="ticket">Ticket
                        <p>{value.titulo}</p>
                        <ul> 
                            {value.usuarios.map(usuario => 
                                <li>{usuario} </li>
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