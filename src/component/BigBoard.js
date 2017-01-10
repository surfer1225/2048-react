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
      //this.seedOne();
    }
    else {
      console.log("no more zero");
      return;
    }
  }

  move(dir) {
    let tempButtons = this.state.buttons;
    switch (dir) {
      case "L":
        //console.log("move left");
        for (let k=0;k<4;k++) {
          for (let j=0;j<3;j++) {
            if (tempButtons[k][j]===0) {
              tempButtons[k][j]=tempButtons[0][j+1];
              tempButtons[k][j+1]=0;
            }
          }
        }
        for (let i=1;i<3;i++) {
          if (tempButtons[0][i]===tempButtons[0][i-1]) {
            tempButtons[0][i-1]=tempButtons[0][i-1]*2;
          }
        }
        break;
      case "U":

        break;
      case "D":

        break;
      case "R":

        break;
      default:

    }
    this.setState({
      buttons: tempButtons
    });
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
