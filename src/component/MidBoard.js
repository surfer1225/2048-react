import React, { Component } from 'react';
import BoardButton from './BoardButton.js';

class MidBoard extends Component {
  constructor() {
    super();
    this.state = {
      buttons: Array(16).fill(0)
    };
  }

  render() {
    let num1 = Math.floor(Math.random()*16);
    let num2 = Math.floor(Math.random()*16);
    let tempButtons = this.state.buttons;
    console.log(tempButtons);
    tempButtons[num1] = 2;
    tempButtons[num2] = 2;
    this.setState({
      buttons: tempButtons,
    })
    return (
      <div>
        <div>
          <BoardButton value={this.state.buttons[0]}/>
          <BoardButton value={this.state.buttons[1]}/>
          <BoardButton value={this.state.buttons[2]}/>
          <BoardButton value={this.state.buttons[3]}/>
        </div>
        <div>
          <BoardButton value={this.state.buttons[4]}/>
          <BoardButton value={this.state.buttons[5]}/>
          <BoardButton value={this.state.buttons[6]}/>
          <BoardButton value={this.state.buttons[7]}/>
        </div>
        <div>
          <BoardButton value={this.state.buttons[8]}/>
          <BoardButton value={this.state.buttons[9]}/>
          <BoardButton value={this.state.buttons[10]}/>
          <BoardButton value={this.state.buttons[11]}/>
        </div>
        <div>
          <BoardButton value={this.state.buttons[12]}/>
          <BoardButton value={this.state.buttons[13]}/>
          <BoardButton value={this.state.buttons[14]}/>
          <BoardButton value={this.state.buttons[15]}/>
        </div>
      </div>
    );
  }
}

export default MidBoard;
