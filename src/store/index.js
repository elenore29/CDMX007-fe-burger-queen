import React, { Component} from 'react';
import menu from '../components/menu.json'; 
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

    handleInput(event){
        const valor = event.target.value;
        this.setState({
            inputValue: valor
        });
    }

    add(element){
        const array = [...this.state.order, element]
        this.setState({
            order: array
        })
    }
    
    delete = (element, index) =>{
        console.log(element)
        console.log(index)
        const order = this.state.order.filter(order => {
            return order.id !== element.id; 
        });    
        console.log(order) 
        this.setState({
            order: order
        });
    }

    cancelOrder(){
        const estado = this.state.order
        console.log(estado)
        if(estado.length === 0){
            alert('No hay orden que cancelar')
        } else {
            console.log(estado)
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
    

        console.log(order)
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

