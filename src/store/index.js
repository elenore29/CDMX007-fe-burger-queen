import React, { Component} from 'react';
import menu from '../components/menu.json'; 

export const AppContext = React.createContext({
    menu
})

export class AppContextProvider  extends Component {
    render() {
        return(
            <AppContext.Provider value={menu}>
                {this.props.children}
            </AppContext.Provider>
        ); 
    }
}

export const AppContextConsumer = AppContext.Consumer; 