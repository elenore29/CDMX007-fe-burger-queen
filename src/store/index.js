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
        this.cancelOrder = this.cancelOrder.bind(this);
    }

    handleInput(event){
        const valor = event.target.value;
        this.setState({
            inputValue: valor
        });
    }

    add(element){
        array.push(element); 
        this.setState({
            buttonValue: array 
        })
    }

    cancelOrder(){
        this.setState({
            inputValue: '',
            buttonValue: [],
        })
        alert('Se canceló la orden')
    }

    render() {
        const {
            inputValue,
        } = this.state;
        const {
            buttonValue,
        } = this.state;
        const {
            cancelOrder,
        } = this.state;
        return(
            <AppContext.Provider value={{menu, handleInput: this.handleInput, inputValue, add: this.add, buttonValue, cancelOrder: this.cancelOrder}}>
                {this.props.children}
            </AppContext.Provider>
        ); 
    }
}

export const AppContextConsumer = AppContext.Consumer; 