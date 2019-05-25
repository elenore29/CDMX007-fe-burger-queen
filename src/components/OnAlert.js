import React, {Component, Fragment} from 'react';
import {AppContextConsumer} from '../store/index.js';
import '../App.css';

class OnAlert extends Component{
  render(){
    return ( 
      <AppContextConsumer>
        {value => {
          return (
            <Fragment>
               <p className="onAlert">No hay orden que cancelar</p>
            </Fragment> 
          )
        }} 
      </AppContextConsumer>     
    ); 
  }
}

export default OnAlert; 