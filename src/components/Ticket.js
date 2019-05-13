import React, {Component, Fragment} from 'react';
import './Ticket.css';
import './Client.css';

class Ticket extends Component {
    render() {
        return ( 
            <Fragment>
                <span>{this.props.clientName}</span>
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