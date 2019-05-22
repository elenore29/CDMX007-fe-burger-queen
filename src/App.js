import './App.css';
import Menu from './routes/index.js';
import Ticket from './components/Ticket.js';
import logo from './images/logo.png';
import React, { Component} from 'react';
import {AppContextProvider} from './store/index.js'; 
import firebase from 'firebase'; 
import Logout from './images/exit.png'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null, 
    }
    this.handleAuth = this.handleAuth.bind(this); 
    this.handleLogout = this.handleLogout.bind(this); 
};

handleAuth() {
  const provider = new firebase.auth.GoogleAuthProvider(); 
  firebase.auth().signInWithPopup(provider)
  .then(result => console.log(`${result.user.email} ha iniciado seción`))
  .catch(error => console.log(`Error ${error.code}: ${error.message}`));
}

handleLogout(){
  firebase.auth().signOut()
  .then(result => console.log(`${result.user.email} ha salido`))
  .catch(error => console.log(`Error ${error.code}: ${error.message}`));
}

componentWillMount(){
  firebase.auth().onAuthStateChanged(user=>{
    this.setState({
      user: user
    });
  });
}

handleRender() {
  if(this.state.user) {
    return ( 
      <AppContextProvider>
        <Menu></Menu>
        <button onClick={this.handleLogout} className="log-out"><img className="logout-icon" src={Logout}></img></button>
        <Ticket></Ticket>
      </AppContextProvider>
      )
  }

   else {
     return (
      <div className="back-login">
      <img className="burger-logo" src={logo} alt="Logo"></img>
        <button className="login" onClick={this.handleAuth}>Login con Google</button>
      </div>
     ); 
   }
}

  render() {
      return ( 
        <div>{this.handleRender()}</div>
        )
      //return this.state.data ? <Menu></Menu> : 'trayendo data...';
  }
} 

export default App;
