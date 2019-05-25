import React, {Component, Fragment} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';

class OnAlert3 extends Component{
  render(){
    return ( 
      <AppContextConsumer>
        {value => {
          return (
            <Fragment>
               <p className="onAlert">Elije un producto</p>
            </Fragment> 
          )
        }} 
      </AppContextConsumer>     
    ); 
  }
}

export default OnAlert3; 