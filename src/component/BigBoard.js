import React, { Component } from 'react';
import MoveButton from './MoveButton.js';
import MidBoard from './MidBoard.js';

class Board extends Component {
  constructor() {
    super();
    let tempButtons = Array(16).fill(0);
    let num1 = Math.floor(Math.random()*16);
    let num2 = Math.floor(Math.random()*16);
    tempButtons[num1] = 2;
    tempButtons[num2] = 2;
    this.state = {
      buttons: tempButtons
    };
  }

  seedOne() {
    let tempButtons = this.state.tbuttons;
    let num = Math.floor(Math.random()*16);
    tempButtons[num] = 2;
    this.state = {
      buttons: tempButtons
    };
  }

  render() {
    return (
      <div>
        <div>
          <MoveButton value="left"/>
          <MoveButton value="up"/>
          <MoveButton value="down"/>
          <MoveButton value="right"/>
        </div>
        <br/>
        <div>
          <MidBoard buttons={this.state.buttons}/>
        </div>
      </div>
    );
  }
}

export default Board;
