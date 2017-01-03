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
    while (tempButtons[num]!==0) {
      num = Math.floor(Math.random()*16);
    }
    tempButtons[num] = 2;

    this.setState({
      buttons: tempButtons
    });
  }

  handleClick(direction) {
    console.log(direction);
    if (this.checkGame()) {
      this.seedOne();
      this.seedOne();
    }
    else {
      console.log("no more zero");
      return;
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
          <MoveButton value="left" onClick={()=>this.handleClick("L")}/>
          <MoveButton value="up" onClick={()=>this.handleClick("U")}/>
          <MoveButton value="down" onClick={()=>this.handleClick("D")}/>
          <MoveButton value="right" onClick={()=>this.handleClick("R")}/>
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
