import React, { Component} from 'react';
import menu from '../components/menu.json'; 
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
        this.delete = this.delete.bind(this); 
    }

    handleInput(event){
        const valor = event.target.value;
        this.setState({
            inputValue: valor
        });
    }

    add(element){
        const array = this.state.buttonValue
        array.push(element); 
        const index = array.indexOf(element);
        console.log(index)
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

    delete(element){

        console.log(element); 
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
            <AppContext.Provider value={{menu, handleInput: this.handleInput, inputValue, add: this.add, buttonValue, cancelOrder: this.cancelOrder, delete: this.delete}}>
                {this.props.children}
            </AppContext.Provider>
        ); 
    }
}

export const AppContextConsumer = AppContext.Consumer; 