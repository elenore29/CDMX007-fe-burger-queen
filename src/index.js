import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'; 

firebase.initializeApp({
    apiKey: "AIzaSyBKk2CaJjloIurRV-GULrqmapQWqJnMmdM",
    authDomain: "burger-queen-1480c.firebaseapp.com",
    databaseURL: "https://burger-queen-1480c.firebaseio.com",
    projectId: "burger-queen-1480c",
    storageBucket: "burger-queen-1480c.appspot.com",
    messagingSenderId: "814648695253",
    appId: "1:814648695253:web:fd4f194ad9740f9d"
}); 

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
