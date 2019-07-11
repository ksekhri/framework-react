import React from 'react';
import {hot} from 'react-hot-loader';
import './App.css';
import reactIcon from './assets/images/react-icon.svg';

function App() {
  return(
    <div className="App">
      <h1>React App</h1>
      <img src={reactIcon} height="200px" width="200px" />
    </div>
  );
}

export default hot(module)(App);
