import React, {Component, Fragment} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';

class OnAlert2 extends Component{
  render(){
    return ( 
      <AppContextConsumer>
        {value => {
          return (
            <Fragment>
               <p className="onAlert">Introduce el nombre del cliente y elije un producto</p>
            </Fragment> 
          )
        }} 
      </AppContextConsumer>     
    ); 
  }
}

export default OnAlert2; 