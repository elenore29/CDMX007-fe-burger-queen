import React, { Component} from 'react';
import menu from '../components/menu.json'; 
import { thisTypeAnnotation } from '@babel/types';
export const AppContext = React.createContext(); 

export class AppContextProvider  extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            inputValue: '',
            order: [], 
        }
        this.handleInput = this.handleInput.bind(this); 
        this.add = this.add.bind(this); 
        this.cancelOrder = this.cancelOrder.bind(this);
        this.delete = this.delete.bind(this); 
    }

    handleInput = (event) => {
        const valor = event.target.value;
        this.setState({
            inputValue: valor
        });
    }

    add = (element) => {
        const array = [...this.state.order]
        if(array.includes(element)){
            element.quantity = element.quantity + 1;
            element.total = element.total + element.precio;

        } else {
            array.push(element)
        }
        this.setState({
            order: array
        })
    }
    
    delete = (element) => {
        if(element.quantity > 1){
            const array = [...this.state.order]
            element.quantity = element.quantity - 1;
            element.total = element.total - element.precio;
            this.setState({
                order: array
            });
        }
        else {
            const array = this.state.order.filter(order => {
                return order.id !== element.id
            })
            this.setState({
                order: array
            });
        }
    }

    cancelOrder = () => {
        const estado = this.state.order
        if(estado.length === 0){
            alert('No hay orden que cancelar')
        } else {
        this.setState({
            inputValue: '',
            order: [],
        })
        alert('Se canceló la orden')
        }
    }

    render() {
        const {
            inputValue,
        } = this.state;
        const {
            order,
        } = this.state;
    
        return(
            <AppContext.Provider 
                value={{
                    menu, 
                    order, 
                    inputValue, 
                    add: this.add, 
                    delete: this.delete,
                    handleInput: this.handleInput, 
                    cancelOrder: this.cancelOrder, 
                }}>
                {this.props.children}
            </AppContext.Provider>
        ); 
    }
}

export const AppContextConsumer = AppContext.Consumer; 
