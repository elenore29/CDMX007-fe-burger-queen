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
            isModalOpen2: false,
            onAlert: false,
            onAlert2: false,
            onAlert3: false,
            onAlert4: false,
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
            this.setState({
                onAlert: !this.state.onAlert,
            })        
        } else {
            this.setState({
                inputValue: '',
                order: [],
                isModalOpen2: !this.state.isModalOpen2,
            })
        }
    }

    confirmOrder = () => {
        var db = firebase.firestore();
        const fullOrder = this.state.order; 
        const clientName = this.state.inputValue;
        if(fullOrder.length === 0 && clientName === ''){
            this.setState({
                onAlert2: !this.state.onAlert2,
            })  
            } else if (fullOrder.length === 0) {
                this.setState({
                    onAlert3: !this.state.onAlert3,
                })  
            } else if (clientName === '') {
                this.setState({
                    onAlert4: !this.state.onAlert4,
                }) 
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

    toggleModal2 = () => {
        this.setState({
            isModalOpen2: !this.state.isModalOpen2,
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
        const {
            isModalOpen2,
        } = this.state;
        const {
            onAlert,
        } = this.state;
        const {
            onAlert2,
        } = this.state;
        const {
            onAlert3,
        } = this.state;
        const {
            onAlert4,
        } = this.state;
    
        return(
            <AppContext.Provider 
                value={{
                    menu, 
                    order, 
                    inputValue, 
                    isModalOpen,
                    isModalOpen2,
                    onAlert,
                    onAlert2,
                    onAlert3,
                    onAlert4,
                    add: this.add, 
                    delete: this.delete,
                    handleInput: this.handleInput, 
                    cancelOrder: this.cancelOrder,
                    confirmOrder: this.confirmOrder, 
                    toggleModal: this.toggleModal,
                    toggleModal2: this.toggleModal2,
                }}>
                {this.props.children}
            </AppContext.Provider>
        ); 
    }
}

export const AppContextConsumer = AppContext.Consumer; 
