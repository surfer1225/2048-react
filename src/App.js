import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './component/BigBoard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Let us Play</h2>
        </div>
        <br/>
        <Board/>
      </div>
    );
  }
}

export default App;
