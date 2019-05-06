import React, {Component} from 'react';
import './Ticket.css';

class Ticket extends Component {
    render() {
        return ( 
            <div className="ticket-box">
            <div className="ticket">Ticket
            <div className="total">$0.00</div>
            </div>
            </div>
            )
    }
}

export default Ticket;