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
    let tempButtons = this.state.buttons;
    let num = Math.floor(Math.random()*16);
    /*
    console.log(tempButtons[num]);
    console.log("check data: " + (tempButtons[num]!==2)
    + " and " + (tempButtons[num]===0));
    */

    while (tempButtons[num]!==0) {
      num = Math.floor(Math.random()*16);
    }
    tempButtons[num] = 2;

    this.setState({
      buttons: tempButtons
    });
  }

  handleClick() {
    console.log("button clicked!");
    if (this.checkGame()) {
      this.seedOne();
      this.seedOne();
    }
  }

  checkGame() {
    for (let i=0;i<16;i++) {
      if (this.state.buttons[i]===0) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div>
        <div>
          <MoveButton value="left" onClick={()=>this.handleClick()}/>
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
