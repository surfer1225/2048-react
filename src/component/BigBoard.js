import React, { Component } from 'react';
import MoveButton from './MoveButton.js';
import MidBoard from './MidBoard.js';

class Board extends Component {
  constructor() {
    super();
    let tempButtons = Array(4);
    for (let i=0;i<4;i++) {
      tempButtons[i] = Array(4).fill(0);
    }
    let num1 = Math.floor(Math.random()*16);
    let num2 = Math.floor(Math.random()*16);
    while (num2===num1) {
      num2 = Math.floor(Math.random()*16);
    }
    tempButtons[Math.floor(num1/4)][num1%4] = 2;
    tempButtons[Math.floor(num2/4)][num2%4] = 2;
    this.state = {
      buttons: tempButtons
    };
  }

  seedOne() {
    let tempButtons = this.state.buttons;
    let num = Math.floor(Math.random()*16);
    while (tempButtons[Math.floor(num/4)][num%4]!==0) {
      num = Math.floor(Math.random()*16);
    }
    tempButtons[Math.floor(num/4)][num%4] = 2;

    this.setState({
      buttons: tempButtons
    });
  }

  handleClick(direction) {
    console.log(direction);
    this.move(direction);
    if (this.checkGame()) {
      this.seedOne();
      this.seedOne();
    }
    else {
      console.log("no more zero");
      return;
    }
  }

  move(dir) {
    switch (dir) {
      case "L":
        //console.log("move left");
        
        break;
      case "U":

        break;
      case "D":

        break;
      case "R":

        break;
      default:

    }
    return;
  }

  checkGame() {
    for (let i=0;i<16;i++) {
      if (this.state.buttons[Math.floor(i/4)][i%4]===0) {
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
