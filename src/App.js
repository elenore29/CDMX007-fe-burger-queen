import React from 'react';
import './App.css';
import logo from './images/logo.png';
import Login from './components/Login.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="burger-logo" src={logo} alt="Logo"></img>
      </header>
      <Login></Login>
    </div>
  );
}

export default App;
