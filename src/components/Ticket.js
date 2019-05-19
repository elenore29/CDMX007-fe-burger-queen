import React, {Component, Fragment} from 'react';
import '../App.css'

class Ticket extends Component{
  render(){
    return (
      <Fragment>
        <div className="ticket-box">
          <div className="ticket">Ticket
            <div className="total">$0.00</div>
          </div>
        </div>
      </Fragment>      
    ); 
  }
}

export default Ticket; 