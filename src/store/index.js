import React, { Component} from 'react';
import menu from '../components/menu.json'; 
const array = []; 

export const AppContext = React.createContext(); 

export class AppContextProvider  extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            inputValue: '',
            buttonValue: [], 
        }
        this.handleInput = this.handleInput.bind(this); 
        this.add = this.add.bind(this); 
    }

    handleInput(event){
        const valor = event.target.value;
        this.setState({
            inputValue: valor
        });
    }

    add(event){
        const id = event.target.id
        array.push(id); 
        this.setState({
            buttonValue: array 
        })
    }

    render() {
        const {
            inputValue,
        } = this.state;
        const {
            buttonValue,
        } = this.state;
        return(
            <AppContext.Provider value={{menu, handleInput: this.handleInput, inputValue, add: this.add, buttonValue}}>
                {this.props.children}
            </AppContext.Provider>
        ); 
    }
}

export const AppContextConsumer = AppContext.Consumer; 