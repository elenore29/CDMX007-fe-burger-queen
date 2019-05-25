import React, { Component} from 'react';
import menu from '../components/menu.json'; 
import firebase from 'firebase'; 
export const AppContext = React.createContext(); 

export class AppContextProvider  extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            inputValue: '',
            order: [], 
            isModalOpen: false,
        }
        this.handleInput = this.handleInput.bind(this); 
        this.add = this.add.bind(this); 
        this.cancelOrder = this.cancelOrder.bind(this);
        this.delete = this.delete.bind(this); 
        this.confirmOrder = this.confirmOrder.bind(this); 
        this.toggleModal = this.toggleModal.bind(this); 
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
        const estado = this.state.order;
        if(estado.length === 0){
            alert('No hay orden que cancelar')
        } else {
            this.setState({
                inputValue: '',
                order: [],
                isModalOpen: !this.state.isModalOpen,
            })
        }
    }

    confirmOrder = () => {
        var db = firebase.firestore();
        const fullOrder = this.state.order; 
        const clientName = this.state.inputValue;
        if(fullOrder.length === 0 && clientName === ''){
            alert('Escribe el nombre del cliente y elije un producto')
            } else if (fullOrder.length === 0) {
                alert('Elije un producto')
            } else if (clientName === '') {
                alert('Introduce el nombre del cliente')
            } else {
                db.collection("orders").add({
                    name: clientName,
                    orden: fullOrder,
                    date: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
                this.setState({
                    inputValue: '',
                    order: [],
                    isModalOpen: !this.state.isModalOpen,
                })
            }
    };

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }

    render() {
        const {
            inputValue,
        } = this.state;
        const {
            order,
        } = this.state;
        const {
            isModalOpen,
        } = this.state;
    
        return(
            <AppContext.Provider 
                value={{
                    menu, 
                    order, 
                    inputValue, 
                    isModalOpen,
                    add: this.add, 
                    delete: this.delete,
                    handleInput: this.handleInput, 
                    cancelOrder: this.cancelOrder,
                    confirmOrder: this.confirmOrder, 
                    toggleModal: this.toggleModal,
                }}>
                {this.props.children}
            </AppContext.Provider>
        ); 
    }
}

export const AppContextConsumer = AppContext.Consumer; 
