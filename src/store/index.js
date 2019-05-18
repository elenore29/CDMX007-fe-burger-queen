import React, { Component} from 'react';

export const AppContext = React.createContext({
    usuarios: [],
    titulo: 'default', 
  })

export class AppContextProvider  extends Component {
    render() {
        return(
            <AppContext.Provider value={{
                usuarios: ['leo', 'juan'],
                titulo: 'App', 
            }}>
                {this.props.children}
            </AppContext.Provider>
        ); 
    }
}

export const AppContextConsumer = AppContext.Consumer; 